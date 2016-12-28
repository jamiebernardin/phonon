System.register(["@angular/core", "@angular/platform-browser", "@angular/platform-browser-dynamic", "@angular/http", "@angular/forms", "@angular/router", "@angular/common", "rxjs/Rx", "rxjs/add/Observable/empty", "./framework/properties", "./components/login", "./framework/entity.service", "./framework/login.service", "./components/animal_type", "./components/pet", "./components/person"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, platform_browser_dynamic_1, http_1, forms_1, router_1, common_1, Rx_1, properties_1, login_1, entity_service_1, login_service_1, animal_type_1, pet_1, person_1, EmptyPanel, routes, AppComponent, PhononModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {
            },
            function (properties_1_1) {
                properties_1 = properties_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (entity_service_1_1) {
                entity_service_1 = entity_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (animal_type_1_1) {
                animal_type_1 = animal_type_1_1;
            },
            function (pet_1_1) {
                pet_1 = pet_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            }
        ],
        execute: function () {
            EmptyPanel = (function () {
                function EmptyPanel() {
                }
                return EmptyPanel;
            }());
            EmptyPanel = __decorate([
                core_1.Component({
                    template: ''
                }),
                __metadata("design:paramtypes", [])
            ], EmptyPanel);
            exports_1("EmptyPanel", EmptyPanel);
            routes = [
                //BEGIN_ROUTES
                { path: 'animal_type-detail', component: animal_type_1.Animal_typeDetailComponent },
                { path: 'animal_type-search', component: animal_type_1.Animal_typeSearchComponent },
                { path: 'pet-detail', component: pet_1.PetDetailComponent },
                { path: 'pet-search', component: pet_1.PetSearchComponent },
                { path: 'person-detail', component: person_1.PersonDetailComponent },
                { path: 'person-search', component: person_1.PersonSearchComponent },
                //END_ROUTES
                { path: 'empty', component: EmptyPanel }
            ];
            AppComponent = (function () {
                function AppComponent(location, _loginService, _router) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this.POLL_INTERVAL = 60000;
                }
                AppComponent.prototype.login = function (event) {
                    var _this = this;
                    this._loginService.login(event.email, event.password).subscribe(function () {
                        _this.route('person-search');
                        _this.error = '';
                    }, function (err) {
                        _this.route('empty');
                        _this.error = 'Invalid email or password.  Please try again.';
                    });
                };
                AppComponent.prototype.logout = function () {
                    this._loginService.logout();
                    this.route('Empty');
                };
                AppComponent.prototype.route = function (name) {
                    if (this._loginService.isLoggedIn) {
                        this._router.navigate([name]);
                    }
                    else {
                        this._router.navigate(['empty']);
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._loginService.checkLoggedIn().
                        map(function (data) { return _this._router.navigate(['person-search']); }).catch(function (err) { return Rx_1.Observable.empty(); }).subscribe();
                    Rx_1.Observable.timer(this.POLL_INTERVAL, this.POLL_INTERVAL).subscribe(function (t) {
                        _this._loginService.checkLoggedIn().catch(function (err) { return Rx_1.Observable.empty(); }).subscribe();
                    });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: '../templates/app.component.html',
                    providers: [login_service_1.LoginService],
                }),
                __metadata("design:paramtypes", [common_1.Location, login_service_1.LoginService, router_1.Router])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            PhononModule = (function () {
                function PhononModule() {
                }
                return PhononModule;
            }());
            PhononModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        //BEGIN_MODEL_DECS
                        animal_type_1.Animal_typeRowComponent, animal_type_1.Animal_typeDetailComponent, animal_type_1.Animal_typeSearchComponent,
                        pet_1.PetRowComponent, pet_1.PetDetailComponent, pet_1.PetSearchComponent,
                        person_1.PersonRowComponent, person_1.PersonDetailComponent, person_1.PersonSearchComponent,
                        //END_MODEL_DECS
                        AppComponent, EmptyPanel, properties_1.StringProperty, properties_1.BooleanProperty,
                        properties_1.DateTimeProperty, properties_1.TextProperty, properties_1.IntegerProperty, properties_1.SelectProperty, login_1.LoginComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        router_1.RouterModule.forRoot(routes) // <-- routes
                    ],
                    bootstrap: [AppComponent],
                    providers: [
                        login_service_1.LoginService, entity_service_1.EntityService,
                        { provide: common_1.APP_BASE_HREF, useValue: '/' },
                        { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
                    ]
                }),
                __metadata("design:paramtypes", [])
            ], PhononModule);
            exports_1("PhononModule", PhononModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(PhononModule)
                .catch(function (err) { return console.error(err); });
        }
    };
});
//# sourceMappingURL=app.js.map