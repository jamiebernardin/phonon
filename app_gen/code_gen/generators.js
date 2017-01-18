var fs = require('fs');

module.exports = {
    component: function(models, templateFile, outDir) {
        var that = this;
        models.forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var outFile = outDir + name + '.ts';
            var content = fs.readFileSync(templateFile, 'utf8');
            content = content.replace(new RegExp('_ComponentName_', 'g'), Name);
            content = content.replace(new RegExp('_componentName_', 'g'), name);
            content = content.replace(new RegExp('ROW_DETAIL', 'g'), that.generateDetail(model.rowDetailFields));
            content = content.replace('DISPLAY_FIELD', model.displayField);
            require('fs').writeFileSync(outFile, content, 'utf8');
        });
    },
    detail: function(models, templateFile, modelDir, outDir) {
        var that = this;
        models.forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var outFile = outDir + name + '-detail.html';
            var apiModel = require(modelDir + Name).attributes;
            var collections = [];
            var content = fs.readFileSync(templateFile);
            content += "<div class='ui three column doubling stackable grid'>\n";
            var field, displayName, type, schemaModel;
            for (field in apiModel) {
                if (apiModel.hasOwnProperty(field)) {
                    if (typeof apiModel[field].collection !== 'undefined') {
                        collections.push({field: field, collection: apiModel[field].collection});
                    } else {
                        type = apiModel[field].type;
                        if (typeof type === 'undefined') {
                            schemaModel = apiModel[field].model;
                            if (typeof schemaModel !== 'undefined') {
                                type = 'select';
                            }
                        }
                        content += "   <div class='column'>\n";
                        content += "       <" + type + "-property\n";
                        content += "          [sheet]=\"sheet\"\n";
                        content += "          [edit]=\"edit\"\n";
                        content += "          [field]=\"'" + field + "'\"\n";
                        content += "          [displayName]=\"'" + that.displayName(field) + "'\"";
                        if (type === 'select') {
                            content += "\n          [itemsUrl]=\"'" + schemaModel + "/items'\">\n";
                        } else {
                            content += ">\n";
                        }
                        content += '       </' + type + '-property>\n';
                        content += '   </div>\n';
                    }
                }
            }
            content += '</div>\n';
            if (collections) {
                    collections.forEach(function (fieldModel) {
                        content += '<div class=\"ui container segment \">\n';
                        content += '    <h4 class=\"ui header\">' + fieldModel.field + '</h4>\n';
                        content += "       <collection-property\n";
                        content += "          [sheet]=\"sheet\"\n";
                        content += "          (routeItemOutlet)=\"routeToItem($event)\"\n";
                        content += "          [edit]=\"edit\"\n";
                        content += "          [collection]=\"'" + fieldModel.collection + "'\"\n";
                        content += "          [field]=\"'" + fieldModel.field + "'\">\n";
                        content += '       </collection-property>\n';
                        content += '   </div>\n';
                })
            }
            require('fs').writeFileSync(outFile, content);
        });
    },
    controller: function(models, templateFile, outDir) {
        models.forEach(function(model) {
            var Name = model.name, searchField = model.searchField;
            var outFile = outDir + Name + 'Controller.js';
            var content = fs.readFileSync(templateFile, 'utf8');
            content = content.replace(new RegExp('MODEL_NAME', 'g'), Name);
            content = content.replace('SEARCH_FIELD', searchField);
            content = content.replace('DISPLAY_FIELD', model.displayField);
            var collections = model.collections;
            var colStr = '';
            if (typeof collections !== 'undefined') {
                colStr = '.'
                collections.forEach(function(collection) {
                   colStr += 'populate(\'' + collection + '\').'
                });
                colStr = colStr.slice(0,colStr.length-1);
            }
            content = content.replace(new RegExp('POPULATE_COLLECTIONS', 'g'), colStr);
            require('fs').writeFileSync(outFile, content, 'utf8');
        });
    },
    appModule: function(models, templateFile, outFile) {
        var content = fs.readFileSync(templateFile, 'utf8');
        models.forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            // imports
            var searchStr = '//BEGIN_MODEL_IMPORTS';
            var replaceStr = searchStr + '\nimport {' + Name + 'RowComponent, ' + Name +'DetailComponent, ';
            replaceStr += Name + 'SearchComponent} from \'./components/' + name +'\'';
            content = content.replace(searchStr, replaceStr);
            // routes
            searchStr = '//BEGIN_ROUTES';
            replaceStr = searchStr + '\n    {path: \'' + name + '-detail\', component: ' + Name +'DetailComponent},';
            replaceStr += '\n    {path: \'' + name + '-search\', component: ' + Name +'SearchComponent},';
            content = content.replace(searchStr, replaceStr);
            // module declarations
            searchStr = '//BEGIN_MODEL_DECS';
            replaceStr = searchStr + '\n        ' +Name + 'RowComponent, ' + Name +'DetailComponent, ';
            replaceStr += Name + 'SearchComponent,';
            content = content.replace(searchStr, replaceStr);
        });
        var searchStr = 'FIRST_MODEL';
        content = content.replace(new RegExp(searchStr, 'g'), models[0].name.toLowerCase());
        require('fs').writeFileSync(outFile, content, 'utf8');
    },
    appMenu: function(models, templateFile, outFile) {
        var that = this;
        var content = fs.readFileSync(templateFile, 'utf8');
        models.reverse().forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var searchStr = '        <!--MENU_BEGIN-->';
            var replaceStr = searchStr + '\n       <a class=\"item\" (click)=\"route(\'';
            replaceStr += name + '-search\')\">' + that.displayName(name) + '</a>';
            content = content.replace(searchStr, replaceStr);
        });
        models.reverse();
        require('fs').writeFileSync(outFile, content, 'utf8');
    },
    controllerRoutes: function(models, templateFile, outFile) {
        var content = fs.readFileSync(templateFile, 'utf8');
        models.forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var searchStr = '    //ROUTES_START';
            var replaceStr = searchStr + '\n    \'get /' +name+'\' : \'' + Name + 'Controller.get\',';
            replaceStr += '\n    \'put /' +name+'/associations/:id\' : \'' + Name + 'Controller.put\',';
            content = content.replace(searchStr, replaceStr);
        });
        fs.writeFileSync(outFile, content, 'utf8');
    },
    generateDetail : function (fields) {
        var content = '';
        var that = this;
        fields.forEach(function (field) {
            content += '      <div class=\"ui label\">\n';
            content += '        ' + that.displayName(field) + ': \n';
            content += '        <div class="detail">';
            content +=          '{{entity.getObj().' + field + '}}</div>\n';
            content += '      </div>\n';
        });
        return content;
    },
    copyModels: function (models, sourceDir, targetDir) {
        models.forEach(function(model) {
            var filename = model.name + '.js';
            var sourceFile = sourceDir + filename;
            var targetFile = targetDir + filename;
            fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));
        });
    },
    bootstrap: function(initData, templateFile, targetFile ) {
        var content = fs.readFileSync(templateFile, 'utf8');
        var searchStr = '    //INIT_DATA_START';
        for (var table in initData) {
            if (initData.hasOwnProperty(table)) {
                var replaceStr = searchStr + '\n';
                replaceStr += JSON.stringify(initData[table], null, '\t') + '\n    .forEach(function (ts) {\n        ';
                replaceStr += table + '.create(ts).exec(function (err, thing) {\n';
                replaceStr += '            if (err) { console.log(err); } else {\n';
                replaceStr += '                console.log(\'' + table + ': \' + thing.name + \' created.\')\n';
                replaceStr += '            }\n        });\n    });\n\n';
                content = content.replace(searchStr, replaceStr);
            }
        };
        fs.writeFileSync(targetFile, content, 'utf8');
    },
    // private functions
    displayName  : function (field) {
        var camel = field.replace(/(\_[a-z])/g, function (item) {
            return item.toUpperCase().replace('_', ' ');
        });
        return camel[0].toUpperCase() + camel.slice(1);
    }
}