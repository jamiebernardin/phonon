/**
 * Created by jbernardin on 12/23/16.
 */
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

var outFile = '../assets/ts/components/'+modelName + '.ts';
var utils = require('./resources/utils');
var compTemplate = './resources/component-template.ts';
var content = require('fs').readFileSync(compTemplate, 'utf8');
content = content.replace(new RegExp('_ComponentName_', 'g'), ModelName);
content = content.replace(new RegExp('_componentName_', 'g'), modelName);

require('fs').writeFileSync(outFile, content, 'utf8');