System.register(['./property.sheet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var property_sheet_1;
    var BaseRowComponent, BaseSearchComponent, BaseDetailComponent;
    return {
        setters:[
            function (property_sheet_1_1) {
                property_sheet_1 = property_sheet_1_1;
            }],
        execute: function() {
            //get provider meta data
            BaseRowComponent = (function () {
                function BaseRowComponent() {
                }
                return BaseRowComponent;
            }());
            exports_1("BaseRowComponent", BaseRowComponent);
            BaseSearchComponent = (function () {
                function BaseSearchComponent(entityService, router, routeParams) {
                    this.searchStr = "";
                    this.entities = [];
                    this.routeParams = routeParams;
                    this.router = router;
                    this.entityService = entityService;
                }
                BaseSearchComponent.prototype.getEntityMetaData = function () {
                    return null;
                };
                BaseSearchComponent.prototype.getDetailRoute = function () {
                    return null;
                };
                BaseSearchComponent.prototype.search = function () {
                    var that = this;
                    this.entities = [];
                    this.entityService.search(this.getEntityMetaData(), this.searchStr).subscribe(function (entities) { return Array.prototype.push.apply(that.entities, entities); });
                };
                BaseSearchComponent.prototype.onSelect = function (entity) {
                    var sheet = new property_sheet_1.PropertySheet(entity.getObj());
                    this.router.navigate([this.getDetailRoute(), { sheet: sheet, searchStr: this.searchStr }]);
                };
                BaseSearchComponent.prototype.ngOnInit = function () {
                    this.searchStr = this.routeParams.get('searchStr');
                    if (typeof this.searchStr !== "undefined") {
                        this.search();
                    }
                };
                return BaseSearchComponent;
            }());
            exports_1("BaseSearchComponent", BaseSearchComponent);
            BaseDetailComponent = (function () {
                function BaseDetailComponent(entityService, router, routeParams) {
                    this.routeParams = routeParams;
                    this.router = router;
                    this.entityService = entityService;
                    this.edit = false;
                }
                BaseDetailComponent.prototype.getEntityMetaData = function () {
                    return null;
                };
                BaseDetailComponent.prototype.getSearchRoute = function () {
                    return null;
                };
                BaseDetailComponent.prototype.ngOnInit = function () {
                    this.sheet = this.routeParams.get('sheet');
                    this.searchStr = this.routeParams.get('searchStr');
                };
                BaseDetailComponent.prototype.back = function () {
                    this.router.navigate([this.getSearchRoute(), { searchStr: this.searchStr }]);
                };
                BaseDetailComponent.prototype.doEdit = function () {
                    this.edit = true;
                };
                BaseDetailComponent.prototype.cancel = function () {
                    this.edit = false;
                };
                BaseDetailComponent.prototype.save = function () {
                    var _this = this;
                    var changes = this.sheet.getChangedValues();
                    if (changes !== {}) {
                        this.entityService.save(this.getEntityMetaData(), this.sheet.getValue('id'), changes).subscribe(function (res) {
                            _this.sheet.setEntity(res.json());
                            _this.edit = false;
                        });
                    }
                    else {
                        this.edit = false;
                    }
                };
                return BaseDetailComponent;
            }());
            exports_1("BaseDetailComponent", BaseDetailComponent);
        }
    }
});
//# sourceMappingURL=base.components.js.map