System.register(['angular2/core', './provider-row.component', '../entity/entity.service', './provider', 'angular2/router', '../components/base.components'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, provider_row_component_1, entity_service_1, provider_1, router_1, base_components_1;
    var ProviderSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (provider_row_component_1_1) {
                provider_row_component_1 = provider_row_component_1_1;
            },
            function (entity_service_1_1) {
                entity_service_1 = entity_service_1_1;
            },
            function (provider_1_1) {
                provider_1 = provider_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (base_components_1_1) {
                base_components_1 = base_components_1_1;
            }],
        execute: function() {
            ProviderSearchComponent = (function (_super) {
                __extends(ProviderSearchComponent, _super);
                function ProviderSearchComponent(entityService, router, routeParams) {
                    _super.call(this, entityService, router, routeParams);
                    this.searchStr = "";
                    this.entities = [];
                }
                ProviderSearchComponent.prototype.getEntityMetaData = function () {
                    return provider_1.Provider.get();
                };
                ProviderSearchComponent.prototype.getDetailRoute = function () {
                    return 'ProviderDetail';
                };
                ProviderSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'provider-search',
                        directives: [provider_row_component_1.ProviderRowComponent],
                        providers: [entity_service_1.EntityService],
                        template: "\n    <form class=\"ui large message\">\n      <h3 class=\"ui header\">Search for Providers</h3>\n      <div class=\"field\">\n        <label for=\"name\">Name:</label>\n        <input name=\"name\" [(ngModel)]=\"searchStr\" (keyup)=\"search()\">\n      </div>\n    </form>\n    <div class=\"search results\">\n      <provider-row\n        *ngFor=\"#entity of entities\"\n        [entity]=\"entity\"\n        (click)=\"onSelect(entity)\">\n      </provider-row>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [entity_service_1.EntityService, router_1.Router, router_1.RouteParams])
                ], ProviderSearchComponent);
                return ProviderSearchComponent;
            }(base_components_1.BaseSearchComponent));
            exports_1("ProviderSearchComponent", ProviderSearchComponent);
        }
    }
});
//# sourceMappingURL=provider-search.component.js.map