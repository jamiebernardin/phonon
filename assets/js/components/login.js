System.register(["@angular/core", "../framework/login.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, login_service_1, router_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            LoginComponent = (function () {
                function LoginComponent(_loginService, _router) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this.loginSubmit = new core_1.EventEmitter();
                }
                LoginComponent.prototype.login = function () {
                    this.loginSubmit.emit({ email: this.email, password: this.password });
                };
                return LoginComponent;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], LoginComponent.prototype, "loginSubmit", void 0);
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'login-panel',
                    providers: [login_service_1.LoginService],
                    inputs: ['error'],
                    template: "\n    <form class=\"ui form \">\n      <div class=\"field\">\n        <label>Email</label>\n        <input placeholder=\"email\" type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"email\">\n      </div>\n      <div class=\"field\">\n        <label>Password</label>\n        <input type=\"password\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"password\">\n      </div>\n      <div class=\"ui basic submit button\" (click)=\"login()\">Submit</div>\n    </form>\n    <div *ngIf=\"error\" class=\"ui bottom attached error message\">\n      {{error}}\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.js.map