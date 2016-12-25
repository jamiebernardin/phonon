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
    var core_1, base_components_1, entity_service_1, router_1, ProviderDetailComponent, ProviderRowComponent, ProviderSearchComponent, _a, _b;
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
            ProviderDetailComponent = (function (_super) {
                __extends(ProviderDetailComponent, _super);
                function ProviderDetailComponent(entityService, router) {
                    return _super.call(this, entityService, router) || this;
                }
                ProviderDetailComponent.prototype.getPath = function () {
                    return 'provider';
                };
                ProviderDetailComponent.prototype.getSearchRoute = function () {
                    return 'provider-search';
                };
                return ProviderDetailComponent;
            }(base_components_1.BaseDetailComponent));
            ProviderDetailComponent = __decorate([
                core_1.Component({
                    templateUrl: '../../templates/provider-detail.html',
                    providers: [entity_service_1.EntityService]
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
            ], ProviderDetailComponent);
            exports_1("ProviderDetailComponent", ProviderDetailComponent);
            ProviderRowComponent = (function (_super) {
                __extends(ProviderRowComponent, _super);
                function ProviderRowComponent() {
                    return _super.apply(this, arguments) || this;
                }
                return ProviderRowComponent;
            }(base_components_1.BaseRowComponent));
            ProviderRowComponent = __decorate([
                core_1.Component({
                    selector: 'provider-row',
                    inputs: ['entity'],
                    host: {
                        class: 'row'
                    },
                    template: "\n    <div class=\"ui large form segment\">\n      <div class=\"ui value\">\n        {{ entity.getObj().provider_name }}\n      </div><p></p>\n      <div class=\"ui label\">\n        Participating Physicians\n        <div class=\"detail\">{{entity.getObj().number_of_physician_participants}}</div>\n      </div>\n      <div class=\"ui label\">\n        Hours of Instruction\n        <div class=\"detail\">{{entity.getObj().number_of_hours_of_instruction}}</div>\n      </div>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [])
            ], ProviderRowComponent);
            exports_1("ProviderRowComponent", ProviderRowComponent);
            ProviderSearchComponent = (function (_super) {
                __extends(ProviderSearchComponent, _super);
                function ProviderSearchComponent(entityService, router) {
                    var _this = _super.call(this, entityService, router) || this;
                    _this.searchStr = "";
                    _this.entities = [];
                    return _this;
                }
                ProviderSearchComponent.prototype.getPath = function () {
                    return 'provider';
                };
                ProviderSearchComponent.prototype.getDetailRoute = function () {
                    return 'provider-detail';
                };
                return ProviderSearchComponent;
            }(base_components_1.BaseSearchComponent));
            ProviderSearchComponent = __decorate([
                core_1.Component({
                    selector: 'provider-search',
                    //directives: [ProviderRowComponent],
                    // directives: [ROUTER_DIRECTIVES],
                    providers: [entity_service_1.EntityService],
                    template: "\n     <div class=\"ui text menu\">\n     <h3 class=\"ui item\">Provider:</h3>\n       <div class=\"ui item\">\n            <div class=\"ui icon input\">\n              <input type=\"text\" placeholder=\"Search...\"  [(ngModel)]=\"searchStr\" (keyup)=\"search()\">\n              <i class=\"search link icon\"></i>\n            </div>\n        </div>\n        <button class=\"ui basic button\" (click)=\"create()\">New</button>\n     </div>\n    <!--</form>-->\n    <div class=\"search results\">\n      <provider-row\n        *ngFor=\"let entity of entities\"\n        [entity]=\"entity\"\n        (click)=\"onSelect(entity)\">\n      </provider-row>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
            ], ProviderSearchComponent);
            exports_1("ProviderSearchComponent", ProviderSearchComponent);
        }
    };
});
//# sourceMappingURL=provider.js.map