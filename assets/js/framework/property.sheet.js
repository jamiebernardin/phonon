System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _, Status, EntityWrapper, PropertySheet;
    return {
        setters: [
            function (_1) {
                _ = _1;
            }
        ],
        execute: function () {
            // for associated entities
            (function (Status) {
                Status[Status["Delete"] = 0] = "Delete";
                Status[Status["Add"] = 1] = "Add";
                Status[Status["Keep"] = 2] = "Keep";
                Status[Status["Available"] = 3] = "Available";
            })(Status || (Status = {}));
            exports_1("Status", Status);
            EntityWrapper = (function () {
                function EntityWrapper(entity, status) {
                    this.entity = entity;
                    this.status = status;
                }
                EntityWrapper.filter = function (items, stati) {
                    var newItems = _.filter(items, function (item) {
                        var retVal = false;
                        for (var _i = 0, stati_1 = stati; _i < stati_1.length; _i++) {
                            var status_1 = stati_1[_i];
                            if (typeof item.status !== 'undefined' && item.status === status_1) {
                                retVal = true;
                            }
                        }
                        return retVal;
                    });
                    return (typeof newItems !== 'undefined') ? newItems : [];
                };
                return EntityWrapper;
            }());
            exports_1("EntityWrapper", EntityWrapper);
            //  end associated entities
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
                    //for (let prop of this.properties) {
                    //    prop.ngOnInit();
                    //}
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
                PropertySheet.prototype.getAssociationChanges = function () {
                    var vals = {};
                    for (var _i = 0, _a = this.properties; _i < _a.length; _i++) {
                        var prop = _a[_i];
                        var changes = prop.getAssociationChanges();
                        if (changes != null) {
                            vals[prop.field] = changes;
                        }
                    }
                    return _.isEmpty(vals) ? null : { changes: vals };
                };
                return PropertySheet;
            }());
            exports_1("PropertySheet", PropertySheet);
        }
    };
});
//# sourceMappingURL=property.sheet.js.map