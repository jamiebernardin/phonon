System.register(["./property.sheet"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var property_sheet_1, RouteSupport, BaseRowComponent, BaseDetailComponent, BaseSearchComponent;
    return {
        setters: [
            function (property_sheet_1_1) {
                property_sheet_1 = property_sheet_1_1;
            }
        ],
        execute: function () {
            RouteSupport = (function () {
                function RouteSupport() {
                    this.data = {};
                }
                RouteSupport.prototype.putParam = function (name, val) {
                    this.data[name] = val;
                };
                RouteSupport.prototype.takeParam = function (name) {
                    var retVal = this.data[name];
                    delete this.data[name];
                    return retVal;
                };
                RouteSupport.get = function () {
                    return RouteSupport.instance || (RouteSupport.instance = new RouteSupport());
                };
                return RouteSupport;
            }());
            exports_1("RouteSupport", RouteSupport);
            BaseRowComponent = (function () {
                function BaseRowComponent() {
                }
                return BaseRowComponent;
            }());
            exports_1("BaseRowComponent", BaseRowComponent);
            BaseDetailComponent = (function () {
                function BaseDetailComponent(entityService, router) {
                    this.router = router;
                    this.entityService = entityService;
                    this.sheet = new property_sheet_1.PropertySheet({});
                }
                BaseDetailComponent.prototype.getPath = function () {
                    return null;
                };
                BaseDetailComponent.prototype.getSearchRoute = function () {
                    return null;
                };
                BaseDetailComponent.prototype.ngOnInit = function () {
                    this.searchStr = RouteSupport.get().takeParam('searchStr');
                    this.create = (typeof RouteSupport.get().takeParam('create') !== 'undefined');
                    this.edit = this.create;
                    this.sheet.setEntity(RouteSupport.get().takeParam('entity'));
                };
                BaseDetailComponent.prototype.back = function () {
                    RouteSupport.get().putParam('searchStr', this.searchStr);
                    this.router.navigate([this.getSearchRoute()]);
                };
                BaseDetailComponent.prototype.doEdit = function () {
                    this.edit = true;
                };
                BaseDetailComponent.prototype.cancel = function () {
                    this.edit = false;
                    if (this.create) {
                        this.back();
                    }
                };
                BaseDetailComponent.prototype.save = function () {
                    var _this = this;
                    var changes = this.sheet.getChangedValues();
                    if (Object.getOwnPropertyNames(changes).length !== 0) {
                        if (this.create) {
                            this.entityService.create(this.getPath(), changes).subscribe(function (res) {
                                _this.edit = false;
                                _this.sheet.setEntity(res.json());
                                _this.create = false;
                            });
                        }
                        else {
                            this.entityService.save(this.getPath(), this.sheet.getValue('id'), changes).subscribe(function (res) {
                                _this.sheet.setEntity(res.json());
                                _this.edit = false;
                            });
                        }
                    }
                    else {
                        this.edit = false;
                    }
                };
                return BaseDetailComponent;
            }());
            exports_1("BaseDetailComponent", BaseDetailComponent);
            BaseSearchComponent = (function () {
                function BaseSearchComponent(entityService, router) {
                    this.searchStr = "";
                    this.entities = [];
                    this.router = router;
                    this.entityService = entityService;
                }
                BaseSearchComponent.prototype.getPath = function () {
                    return null;
                };
                BaseSearchComponent.prototype.getDetailRoute = function () {
                    return null;
                };
                BaseSearchComponent.prototype.search = function () {
                    var that = this;
                    this.entities = [];
                    this.entityService.search(this.getPath(), this.searchStr).subscribe(function (entities) { return Array.prototype.push.apply(that.entities, entities); });
                };
                BaseSearchComponent.prototype.onSelect = function (entity) {
                    RouteSupport.get().putParam('entity', entity.getObj());
                    RouteSupport.get().putParam('searchStr', this.searchStr);
                    this.router.navigate([this.getDetailRoute()]);
                };
                BaseSearchComponent.prototype.create = function () {
                    RouteSupport.get().putParam('entity', {});
                    RouteSupport.get().putParam('searchStr', this.searchStr);
                    RouteSupport.get().putParam('create', true);
                    this.router.navigate([this.getDetailRoute()]);
                };
                BaseSearchComponent.prototype.ngOnInit = function () {
                    this.searchStr = RouteSupport.get().takeParam('searchStr');
                    if (this.searchStr !== null) {
                        this.search();
                    }
                };
                return BaseSearchComponent;
            }());
            exports_1("BaseSearchComponent", BaseSearchComponent);
        }
    };
});
//# sourceMappingURL=base.components.js.map