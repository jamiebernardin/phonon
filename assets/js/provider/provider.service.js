System.register(['angular2/core', 'angular2/http', './provider'], function(exports_1, context_1) {
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
    var core_1, http_1, provider_1;
    var ProviderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (provider_1_1) {
                provider_1 = provider_1_1;
            }],
        execute: function() {
            ProviderService = (function () {
                function ProviderService(_http) {
                    this._http = _http;
                    this.baseUrl = "provider";
                    this.searchQuery = '?where={"provider_name":{"contains":"#"}}';
                    this.providerQuery = '/#';
                }
                ProviderService.prototype.search = function (name) {
                    var url = this.baseUrl + this.searchQuery.replace('#', name);
                    return this._http.get(url).map(function (res) { return res.json().map(function (obj) { return new provider_1.Provider(obj); }); });
                };
                ProviderService.prototype.get = function (id) {
                    var url = this.baseUrl + this.providerQuery.replace('#', id);
                    return this._http.get(url).map(function (res) { return new provider_1.Provider(res.json()); });
                };
                ProviderService.prototype.save = function (id, mods) {
                    var url = this.baseUrl + this.providerQuery.replace('#', id);
                    return this._http.put(url, JSON.stringify(mods));
                };
                ProviderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProviderService);
                return ProviderService;
            }());
            exports_1("ProviderService", ProviderService);
        }
    }
});
//# sourceMappingURL=provider.service.js.map