
module.exports = {
    component: function(models) {
        models.forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var outFile = '../assets/ts/components/' + name + '.ts';
            var utils = require('./scaffolding/utils');
            var compTemplate = './scaffolding/component-template.ts';
            var content = require('fs').readFileSync(compTemplate, 'utf8');
            content = content.replace(new RegExp('_ComponentName_', 'g'), Name);
            content = content.replace(new RegExp('_componentName_', 'g'), name);
            content = content.replace(new RegExp('ROW_DETAIL_FIELD', 'g'), model.rowDetailField);
            content = content.replace('DISPLAY_FIELD', model.displayField);
            require('fs').writeFileSync(outFile, content, 'utf8');
        });
    },
    detail: function(models) {
        var that = this;
        models.forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var outFile = '../assets/templates/' + name + '-detail.html';
            var apiModel = require('../api/models/' + Name).attributes;
            var utils = require('./scaffolding/utils');
            var menuFile = './scaffolding/detail-menu.html';
            var content = require('fs').readFileSync(menuFile);
            content += "<div class='ui three column doubling stackable grid'>\n";
            var field, displayName, type, schemaModel;
            for (field in apiModel) {
                if (apiModel.hasOwnProperty(field)) {
                    type = apiModel[field].type;
                    if (typeof type === 'undefined') {
                        schemaModel = apiModel[field].model;
                        if (typeof schemaModel !== 'undefined') {
                            type = 'select';
                        }
                    }
                    content += "   <div class='column'>\n";
                    content += "       <" + type + "-property>\n";
                    content += "          [sheet]='sheet'\n";
                    content += "          [edit]='edit'\n";
                    content += "          [field]=\"'" + field + "'\"\n";
                    content += "          [displayName]=\"'" +  that.displayName(field) + "'\"\n";
                    if (type === 'select') {
                        content += "          [itemsUrl]=\"'" + field + "/items'\"\n";
                        content += "          [selectName]=\"'" + model.displayField + "'\"\n";
                    }
                    content += '       </' + type + '-property>\n';
                    content += '   </div>\n';
                }
            }
            content += '</div>\n';
            require('fs').writeFileSync(outFile, content);
        });
        //<select-property
        //    [sheet]="sheet"
        //    [edit]="edit"
        //    [field]="'provider_id'"
        //    [displayName]="'Provider'"
        //    [itemsUrl]="'provider/items'"
        //    [selectName]="'provider_name'">
        //    </select-property>
    },
    controller: function(models) {
        var compTemplate = './scaffolding/controller-template.js';
        models.forEach(function(model) {
            var Name = model.name, searchField = model.searchField;
            var outFile = '../api/controllers/'+Name + 'Controller.js';
            var utils = require('./scaffolding/utils');
            var content = require('fs').readFileSync(compTemplate, 'utf8');
            content = content.replace(new RegExp('MODEL_NAME', 'g'), Name);
            content = content.replace('SEARCH_FIELD', searchField);
            content = content.replace('DISPLAY_FIELD', model.displayField);
            require('fs').writeFileSync(outFile, content, 'utf8');
        });
    },
    appModule: function(models) {
        var compTemplate = './scaffolding/app-template.ts';
        var content = require('fs').readFileSync(compTemplate, 'utf8');
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
        var outFile = '../assets/ts/app.ts';
        require('fs').writeFileSync(outFile, content, 'utf8');
    },
    appMenu: function(models) {
        var compTemplate = './scaffolding/app.component-template.html';
        var content = require('fs').readFileSync(compTemplate, 'utf8');
        models.reverse().forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var searchStr = '        <!--MENU_BEGIN-->';
            var replaceStr = searchStr + '\n       <a class=\"item\" (click)=\"route(\'';
            replaceStr += name + '-search\')\">' + Name + '</a>';
            content = content.replace(searchStr, replaceStr);
        });
        models.reverse();
        var outFile = '../assets/templates/app.component.html';
        require('fs').writeFileSync(outFile, content, 'utf8');
    },
    controllerRoutes: function(models) {
        var routesTemplate = './scaffolding/routes-template.js';
        var content = require('fs').readFileSync(routesTemplate, 'utf8');
        models.forEach(function(model) {
            var Name = model.name, name = Name.toLowerCase();
            var searchStr = '    //ROUTES_START';
            // 'get /foo' : 'FooController.get'
            var replaceStr = searchStr + '\n    \'get /' +name+'\' : \'' + Name + 'Controller.get\',';
            content = content.replace(searchStr, replaceStr);
        });
        var outFile = '../config/routes.js';
        require('fs').writeFileSync(outFile, content, 'utf8');
    },
    // private
    displayName  : function (field) {
        var camel = field.replace(/(\_[a-z])/g, function (item) {
            return item.toUpperCase().replace('_', ' ');
        });
        return camel[0].toUpperCase() + camel.slice(1);
    },

}