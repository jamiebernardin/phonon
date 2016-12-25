System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PropertySheet;
    return {
        setters: [],
        execute: function () {
            PropertySheet = (function () {
                function PropertySheet(entity) {
                    this.properties = [];
                    this.entity = entity;
                }
                PropertySheet.prototype.findProperty = function (name) {
                    var retVal = null;
                    for (var _i = 0, _a = this.properties; _i < _a.length; _i++) {
                        var prop = _a[_i];
                        if (prop.field === name) {
                            retVal = prop;
                        }
                    }
                    return retVal;
                };
                PropertySheet.prototype.setEntity = function (entity) {
                    this.entity = entity;
                };
                PropertySheet.prototype.addProperty = function (prop) {
                    this.properties.push(prop);
                };
                PropertySheet.prototype.getValue = function (field) {
                    return (typeof this.entity !== 'undefined') ? this.entity[field] : '';
                };
                PropertySheet.prototype.getChangedValues = function () {
                    var vals = {};
                    for (var _i = 0, _a = this.properties; _i < _a.length; _i++) {
                        var prop = _a[_i];
                        if (prop.newValue !== this.entity[prop.field]) {
                            vals[prop.field] = prop.newValue;
                        }
                    }
                    return vals;
                };
                return PropertySheet;
            }());
            exports_1("PropertySheet", PropertySheet);
        }
    };
});
//# sourceMappingURL=property.sheet.js.map