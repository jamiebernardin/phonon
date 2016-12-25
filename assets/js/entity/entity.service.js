System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var EntityMetaData, Entity, EntityService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            EntityMetaData = (function () {
                function EntityMetaData() {
                }
                return EntityMetaData;
            }());
            exports_1("EntityMetaData", EntityMetaData);
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
            EntityService = (function () {
                function EntityService(_http) {
                    this._http = _http;
                    this.searchQuery = '?where={"SEARCH_FIELD":{"contains":"#"}}';
                }
                EntityService.prototype.search = function (emd, name) {
                    var query = this.searchQuery.replace('SEARCH_FIELD', emd.searchField);
                    var url = emd.name + query.replace('#', name);
                    return this._http.get(url).map(function (res) { return res.json().map(function (obj) { return new Entity(emd, obj); }); });
                };
                EntityService.prototype.get = function (emd, id) {
                    var url = emd.name + '/' + id;
                    return this._http.get(url).map(function (res) { return new Entity(emd, res.json()); });
                };
                EntityService.prototype.save = function (emd, id, mods) {
                    var url = emd.name + '/' + id;
                    return this._http.put(url, JSON.stringify(mods));
                };
                EntityService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EntityService);
                return EntityService;
            }());
            exports_1("EntityService", EntityService);
        }
    }
});
//# sourceMappingURL=entity.service.js.map