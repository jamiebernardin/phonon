System.register(["@angular/core", "../framework/base.components", "../framework/entity.service", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, base_components_1, entity_service_1, router_1, SearchUrlDetailComponent, SearchUrlRowComponent, SearchUrlSearchComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_components_1_1) {
                base_components_1 = base_components_1_1;
            },
            function (entity_service_1_1) {
                entity_service_1 = entity_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            SearchUrlDetailComponent = (function (_super) {
                __extends(SearchUrlDetailComponent, _super);
                function SearchUrlDetailComponent(entityService, router) {
                    return _super.call(this, entityService, router) || this;
                }
                SearchUrlDetailComponent.prototype.getPath = function () {
                    return 'search_url';
                };
                SearchUrlDetailComponent.prototype.getSearchRoute = function () {
                    return 'SearchUrlSearch';
                };
                return SearchUrlDetailComponent;
            }(base_components_1.BaseDetailComponent));
            SearchUrlDetailComponent = __decorate([
                core_1.Component({
                    //directives: [StringProperty, BooleanProperty, IntegerProperty, TextProperty],
                    templateUrl: '../../templates/search_url-detail.html'
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, router_1.Router])
            ], SearchUrlDetailComponent);
            exports_1("SearchUrlDetailComponent", SearchUrlDetailComponent);
            SearchUrlRowComponent = (function (_super) {
                __extends(SearchUrlRowComponent, _super);
                function SearchUrlRowComponent() {
                    return _super.apply(this, arguments) || this;
                }
                return SearchUrlRowComponent;
            }(base_components_1.BaseRowComponent));
            SearchUrlRowComponent = __decorate([
                core_1.Component({
                    selector: 'search_url-row',
                    inputs: ['entity'],
                    host: {
                        class: 'row'
                    },
                    template: "\n    <div class=\"ui large form segment\">\n      <div class=\"ui value\">\n        {{ entity.getObj().title }}\n      </div>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [])
            ], SearchUrlRowComponent);
            exports_1("SearchUrlRowComponent", SearchUrlRowComponent);
            SearchUrlSearchComponent = (function (_super) {
                __extends(SearchUrlSearchComponent, _super);
                function SearchUrlSearchComponent(entityService, router) {
                    var _this = _super.call(this, entityService, router) || this;
                    _this.searchStr = "";
                    _this.entities = [];
                    return _this;
                }
                SearchUrlSearchComponent.prototype.getPath = function () {
                    return 'search_url';
                };
                SearchUrlSearchComponent.prototype.getDetailRoute = function () {
                    return 'SearchUrlDetail';
                };
                return SearchUrlSearchComponent;
            }(base_components_1.BaseSearchComponent));
            SearchUrlSearchComponent = __decorate([
                core_1.Component({
                    selector: 'search_url-search',
                    //directives: [SearchUrlRowComponent],
                    providers: [entity_service_1.EntityService],
                    template: "\n    <form class=\"ui large message\">\n      <h3 class=\"ui header\">Search for SearchUrls</h3>\n      <div class=\"field\">\n        <label for=\"name\">Name:</label>\n        <input name=\"name\" [(ngModel)]=\"searchStr\" (keyup)=\"search()\">\n      </div>\n    </form>\n    <div class=\"search results\">\n      <search_url-row\n        *ngFor=\"#entity of entities\"\n        [entity]=\"entity\"\n        (click)=\"onSelect(entity)\">\n      </search_url-row>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, router_1.Router])
            ], SearchUrlSearchComponent);
            exports_1("SearchUrlSearchComponent", SearchUrlSearchComponent);
        }
    };
});
//# sourceMappingURL=search_url.js.map