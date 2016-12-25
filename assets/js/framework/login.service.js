System.register(["@angular/core", "@angular/http", "rxjs/rx", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, rx_1, LoginService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rx_1_1) {
                rx_1 = rx_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            LoginService = (function () {
                function LoginService(_http) {
                    this._http = _http;
                    this.isLoggedIn = false;
                    this.TOKEN_KEY = 'token';
                    this.ID_KEY = 'id';
                }
                LoginService.prototype.getJwt = function () {
                    return localStorage.getItem(this.TOKEN_KEY);
                };
                LoginService.prototype.checkLoggedIn = function () {
                    var _this = this;
                    var id = window.localStorage.getItem(this.ID_KEY);
                    var url = 'app_user/' + id;
                    return this._http.get(url, this.getRequestOptions()).
                        map(function (res) {
                        var data = res.json();
                        _this.isLoggedIn = true;
                        return data;
                    }).catch(function (err) {
                        _this.logout();
                        return rx_1.Observable.throw("Expired or invalid... ending session");
                    });
                };
                LoginService.prototype.getRequestOptions = function () {
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.getJwt() });
                    return new http_1.RequestOptions({ headers: headers });
                };
                LoginService.prototype.login = function (email, password) {
                    var _this = this;
                    var url = 'auth';
                    return this._http.post(url, JSON.stringify({ 'email': email, 'password': password }))
                        .map(function (res) {
                        var data = res.json();
                        if (typeof data.token !== 'undefined') {
                            window.localStorage.setItem(_this.TOKEN_KEY, data.token);
                            window.localStorage.setItem(_this.ID_KEY, data.user.id);
                            _this.isLoggedIn = true;
                        }
                        else {
                            _this.isLoggedIn = false;
                        }
                        return data;
                    });
                };
                LoginService.prototype.logout = function () {
                    window.localStorage.removeItem(this.TOKEN_KEY);
                    window.localStorage.removeItem(this.ID_KEY);
                    this.isLoggedIn = false;
                };
                return LoginService;
            }());
            LoginService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], LoginService);
            exports_1("LoginService", LoginService);
        }
    };
});
//# sourceMappingURL=login.service.js.map