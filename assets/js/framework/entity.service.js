System.register(["@angular/core", "@angular/http", "rxjs/Rx", "./login.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, Rx_1, login_service_1, Entity, EntityService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }
        ],
        execute: function () {
            Entity = (function () {
                function Entity(obj) {
                    this.obj = obj;
                }
                Entity.prototype.getObj = function () {
                    return this.obj;
                };
                return Entity;
            }());
            exports_1("Entity", Entity);
            EntityService = (function () {
                function EntityService(_http, _loginService) {
                    this._http = _http;
                    this._loginService = _loginService;
                    this.searchQuery = '?searchStr=#';
                }
                EntityService.prototype.handleError = function (error) {
                    if (error.status === 401) {
                    }
                    return Rx_1.Observable.throw(error);
                };
                EntityService.prototype.search = function (path, searchStr) {
                    var url = path + this.searchQuery.replace('#', searchStr);
                    return this._http.get(url, this._loginService.getRequestOptions()).map(function (res) { return res.json().map(function (obj) { return new Entity(obj); }); }).catch(this.handleError);
                };
                EntityService.prototype.get = function (path, id) {
                    var url = path + '/' + id;
                    return this._http.get(url, this._loginService.getRequestOptions()).map(function (res) { return new Entity(res.json()); }).catch(this.handleError);
                };
                EntityService.prototype.getUrl = function (url) {
                    return this._http.get(url, this._loginService.getRequestOptions()).map(function (res) { return res.json(); }).catch(this.handleError);
                };
                EntityService.prototype.query = function (path, action, data) {
                    var url = path + '/' + action;
                    return this._http.post(url, JSON.stringify(data), this._loginService.getRequestOptions()).map(function (res) { return res.json().map(function (obj) { return new Entity(obj); }); }).catch(this.handleError);
                };
                EntityService.prototype.save = function (path, id, mods) {
                    var url = path + '/' + id;
                    return this._http.put(url, JSON.stringify(mods), this._loginService.getRequestOptions());
                };
                EntityService.prototype.delete = function (path, id) {
                    var url = path + '/' + id;
                    return this._http.delete(url, this._loginService.getRequestOptions());
                };
                EntityService.prototype.create = function (path, obj) {
                    var url = path;
                    return this._http.post(url, JSON.stringify(obj), this._loginService.getRequestOptions());
                };
                return EntityService;
            }());
            EntityService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
            ], EntityService);
            exports_1("EntityService", EntityService);
        }
    };
});
//# sourceMappingURL=entity.service.js.map