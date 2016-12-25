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
    var core_1, base_components_1, entity_service_1, router_1, UrlContentDetailComponent, UrlContentRowComponent, UrlContentSearchComponent;
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
            UrlContentDetailComponent = (function (_super) {
                __extends(UrlContentDetailComponent, _super);
                function UrlContentDetailComponent(entityService, router) {
                    return _super.call(this, entityService, router) || this;
                }
                UrlContentDetailComponent.prototype.getPath = function () {
                    return 'url_content';
                };
                UrlContentDetailComponent.prototype.getSearchRoute = function () {
                    return 'UrlContentSearch';
                };
                return UrlContentDetailComponent;
            }(base_components_1.BaseDetailComponent));
            UrlContentDetailComponent = __decorate([
                core_1.Component({
                    //directives: [StringProperty, BooleanProperty, IntegerProperty, TextProperty],
                    templateUrl: '../../templates/url_content-detail.html'
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, router_1.Router])
            ], UrlContentDetailComponent);
            exports_1("UrlContentDetailComponent", UrlContentDetailComponent);
            UrlContentRowComponent = (function (_super) {
                __extends(UrlContentRowComponent, _super);
                function UrlContentRowComponent() {
                    return _super.apply(this, arguments) || this;
                }
                return UrlContentRowComponent;
            }(base_components_1.BaseRowComponent));
            UrlContentRowComponent = __decorate([
                core_1.Component({
                    selector: 'url_content-row',
                    inputs: ['entity'],
                    host: {
                        class: 'row'
                    },
                    template: "\n    <div class=\"ui large form segment\">\n      <div class=\"ui value\">\n        {{ entity.getObj().title }}\n      </div>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [])
            ], UrlContentRowComponent);
            exports_1("UrlContentRowComponent", UrlContentRowComponent);
            UrlContentSearchComponent = (function (_super) {
                __extends(UrlContentSearchComponent, _super);
                function UrlContentSearchComponent(entityService, router) {
                    var _this = _super.call(this, entityService, router) || this;
                    _this.searchStr = "";
                    _this.entities = [];
                    _this.waiting = false;
                    return _this;
                }
                UrlContentSearchComponent.prototype.search = function () {
                    if (this.searchStr !== "") {
                        var data = { searchStr: this.searchStr };
                        var that = this;
                        this.entities = [];
                        this.waiting = true;
                        this.entityService.query(this.getPath(), 'contains', data).subscribe(function (entities) {
                            Array.prototype.push.apply(that.entities, entities);
                            that.waiting = false;
                        });
                    }
                };
                UrlContentSearchComponent.prototype.getPath = function () {
                    return 'url_content';
                };
                UrlContentSearchComponent.prototype.getDetailRoute = function () {
                    return 'UrlContentDetail';
                };
                return UrlContentSearchComponent;
            }(base_components_1.BaseSearchComponent));
            UrlContentSearchComponent = __decorate([
                core_1.Component({
                    selector: 'url_content-search',
                    //directives: [UrlContentRowComponent],
                    providers: [entity_service_1.EntityService],
                    template: "\n    <form class=\"ui large message\">\n      <h3 class=\"ui header\">Search for UrlContents</h3>\n      <div class=\"field\">\n        <label for=\"name\">Name:</label>\n        <input name=\"name\" [(ngModel)]=\"searchStr\">\n        <button class=\"ui button\" (click)=\"search()\">Search</button>\n      </div>\n    </form>\n\n    <div *ngIf=\"waiting\" class=\"ui segment\">\n      <p></p>\n      <p></p>\n      <p></p>\n      <div class=\"ui active inverted dimmer\">\n        <div class=\"ui large text loader\">Loading</div>\n      </div>\n    </div>\n    <div *ngIf=\"!waiting\" class=\"search results\">\n      <url_content-row\n        *ngFor=\"#entity of entities\"\n        [entity]=\"entity\"\n        (click)=\"onSelect(entity)\">\n      </url_content-row>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, router_1.Router])
            ], UrlContentSearchComponent);
            exports_1("UrlContentSearchComponent", UrlContentSearchComponent);
        }
    };
});
//# sourceMappingURL=url_content.js.map