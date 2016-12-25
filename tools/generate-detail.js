/**
 * Created by jamie on 4/9/16.
 */
var args = process.argv.slice(2);

if (args.length<1) {
    console.log('Include model Name as a parameter');
    process.exit();
}
var modelName = args[0].toLowerCase();
var ModelName = modelName[0].toUpperCase() + modelName.slice(1);

var outFile = '../assets/templates/'+modelName + '-detail.html';
var model = require('../api/models/'+ ModelName).attributes;
var utils = require('./resources/utils');
var menuFile = './resources/detail-menu.html';
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