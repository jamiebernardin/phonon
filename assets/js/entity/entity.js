/**
 * Created by jamie on 4/17/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Entity;
    return {
        setters:[],
        execute: function() {
            Entity = (function () {
                function Entity(metaData, obj) {
                    this.metaData = metaData;
                    this.obj = obj;
                }
                Entity.prototype.displayName = function () {
                    return this.obj[this.metaData.displayField];
                };
                Entity.prototype.getObj = function () {
                    return this.obj;
                };
                return Entity;
            }());
            exports_1("Entity", Entity);
        }
    }
});
//# sourceMappingURL=entity.js.map