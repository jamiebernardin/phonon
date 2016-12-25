System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseDetailComponent;
    return {
        setters:[],
        execute: function() {
            //get provider meta data
            BaseDetailComponent = (function () {
                function BaseDetailComponent(entityService, router, routeParams) {
                    this.routeParams = routeParams;
                    this.router = router;
                    this.entityService = entityService;
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
//# sourceMappingURL=base.detail.component.js.map