
module.exports = {
    component: function(model) {
        var modelName = model.model.toLowerCase();
        var ModelName = modelName[0].toUpperCase() + modelName.slice(1);
        var outFile = '../assets/ts/components/'+modelName + '.ts';
        var utils = require('./scaffolding/utils');
        var compTemplate = './scaffolding/component-template.ts';
        var content = require('fs').readFileSync(compTemplate, 'utf8');
        content = content.replace(new RegExp('_ComponentName_', 'g'), ModelName);
        content = content.replace(new RegExp('_componentName_', 'g'), modelName);
        require('fs').writeFileSync(outFile, content, 'utf8');
    },
    detail: function(model) {
        var modelName = model.model.toLowerCase();
        var ModelName = modelName[0].toUpperCase() + modelName.slice(1);
        var outFile = '../assets/templates/'+modelName + '-detail.html';
        var model = require('../api/models/'+ ModelName).attributes;
        var utils = require('./scaffolding/utils');
        var menuFile = './scaffolding/detail-menu.html';
        var content = require('fs').readFileSync(menuFile);
        content = utils.append(content, '<div class="ui three column doubling stackable grid">');
        var field, displayName, type;
        for (field in model) {
            if (model.hasOwnProperty(field)) {
                type = model[field].type;
                content = utils.append(content, '   <div class="column">');
                content = utils.append(content, utils.beginTag(type));
                content = utils.append(content, '          [sheet]="sheet"');
                content = utils.append(content, '          [edit]="edit"');
                content = utils.append(content, '           [field]="\''+ field+ '\'"');
                content = utils.append(content, '           [displayName]="\''+ utils.displayName(field) + '\'">');
                content = utils.append(content, utils.endTag(type));
                content = utils.append(content, '   </div>');
            }
        }
        content = utils.append(content, '</div>');
        require('fs').writeFileSync(outFile, content);
    },
    controller: function() {
        var outFile = '../api/controllers/'+ModelName + 'Controller.js';
        var utils = require('./scaffolding/utils');
        var compTemplate = './scaffolding/controller-template.js';
        var content = require('fs').readFileSync(compTemplate, 'utf8');
        content = content.replace(new RegExp('_ComponentName_', 'g'), ModelName);
        content = content.replace(new RegExp('_componentName_', 'g'), modelName);
        require('fs').writeFileSync(outFile, content, 'utf8');
    },
    appModule: function(models) {
        
    },
    appMenu: function(models) {
        
    }
}