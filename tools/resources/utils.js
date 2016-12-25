/**
 * Created by jamie on 4/16/16.
 */


module.exports = {
    beginTag: function (type) {
        return '       <' + type + '-property';
    },
    endTag: function (type) {
        return '           </' + type + '-property>';
    },
    append: function (body, str) {
        return body + str + '\n';
    },
    displayName: function (field) {
        var camel = field.replace(/(\_[a-z])/g, function (item) {
            return item.toUpperCase().replace('_', ' ');
        });
        return camel[0].toUpperCase() + camel.slice(1);
    }
}