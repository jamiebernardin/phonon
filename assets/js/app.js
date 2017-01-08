System.register(["@angular/core", "@angular/platform-browser", "@angular/platform-browser-dynamic", "@angular/http", "@angular/forms", "@angular/router", "@angular/common", "rxjs/Rx", "rxjs/add/Observable/empty", "./framework/properties", "./components/login", "./framework/entity.service", "./framework/login.service", "./components/skill_type", "./components/ticket_status", "./components/priority_type", "./components/ticket", "./components/worker"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, platform_browser_dynamic_1, http_1, forms_1, router_1, common_1, Rx_1, properties_1, login_1, entity_service_1, login_service_1, skill_type_1, ticket_status_1, priority_type_1, ticket_1, worker_1, EmptyPanel, routes, AppComponent, PhononModule;
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
            function (skill_type_1_1) {
                skill_type_1 = skill_type_1_1;
            },
            function (ticket_status_1_1) {
                ticket_status_1 = ticket_status_1_1;
            },
            function (priority_type_1_1) {
                priority_type_1 = priority_type_1_1;
            },
            function (ticket_1_1) {
                ticket_1 = ticket_1_1;
            },
            function (worker_1_1) {
                worker_1 = worker_1_1;
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
                { path: 'skill_type-detail', component: skill_type_1.Skill_typeDetailComponent },
                { path: 'skill_type-search', component: skill_type_1.Skill_typeSearchComponent },
                { path: 'ticket_status-detail', component: ticket_status_1.Ticket_statusDetailComponent },
                { path: 'ticket_status-search', component: ticket_status_1.Ticket_statusSearchComponent },
                { path: 'priority_type-detail', component: priority_type_1.Priority_typeDetailComponent },
                { path: 'priority_type-search', component: priority_type_1.Priority_typeSearchComponent },
                { path: 'ticket-detail', component: ticket_1.TicketDetailComponent },
                { path: 'ticket-search', component: ticket_1.TicketSearchComponent },
                { path: 'worker-detail', component: worker_1.WorkerDetailComponent },
                { path: 'worker-search', component: worker_1.WorkerSearchComponent },
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
                        _this.route('worker-search');
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
                        map(function (data) { return _this._router.navigate(['worker-search']); }).catch(function (err) { return Rx_1.Observable.empty(); }).subscribe();
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
                        skill_type_1.Skill_typeRowComponent, skill_type_1.Skill_typeDetailComponent, skill_type_1.Skill_typeSearchComponent,
                        ticket_status_1.Ticket_statusRowComponent, ticket_status_1.Ticket_statusDetailComponent, ticket_status_1.Ticket_statusSearchComponent,
                        priority_type_1.Priority_typeRowComponent, priority_type_1.Priority_typeDetailComponent, priority_type_1.Priority_typeSearchComponent,
                        ticket_1.TicketRowComponent, ticket_1.TicketDetailComponent, ticket_1.TicketSearchComponent,
                        worker_1.WorkerRowComponent, worker_1.WorkerDetailComponent, worker_1.WorkerSearchComponent,
                        //END_MODEL_DECS
                        AppComponent, EmptyPanel, properties_1.StringProperty, properties_1.BooleanProperty, properties_1.SelectProperty,
                        properties_1.DateTimeProperty, properties_1.TextProperty, properties_1.IntegerProperty, login_1.LoginComponent, properties_1.CollectionProperty
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