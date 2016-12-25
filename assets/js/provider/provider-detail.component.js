System.register(['angular2/core', '../components/base.components', '../components/properties', '../entity/entity.service', 'angular2/router', './provider'], function(exports_1, context_1) {
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
    var core_1, base_components_1, properties_1, entity_service_1, router_1, provider_1;
    var ProviderDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_components_1_1) {
                base_components_1 = base_components_1_1;
            },
            function (properties_1_1) {
                properties_1 = properties_1_1;
            },
            function (entity_service_1_1) {
                entity_service_1 = entity_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (provider_1_1) {
                provider_1 = provider_1_1;
            }],
        execute: function() {
            ProviderDetailComponent = (function (_super) {
                __extends(ProviderDetailComponent, _super);
                function ProviderDetailComponent(entityService, router, routeParams) {
                    _super.call(this, entityService, router, routeParams);
                    this.edit = false;
                }
                ProviderDetailComponent.prototype.getEntityMetaData = function () {
                    return provider_1.Provider.get();
                };
                ProviderDetailComponent.prototype.getSearchRoute = function () {
                    return 'ProviderSearch';
                };
                ProviderDetailComponent = __decorate([
                    core_1.Component({
                        directives: [properties_1.StringProperty, properties_1.BooleanProperty, properties_1.IntegerProperty],
                        templateUrl: '../../templates/provider/provider-detail.html'
                    }), 
                    __metadata('design:paramtypes', [entity_service_1.EntityService, router_1.Router, router_1.RouteParams])
                ], ProviderDetailComponent);
                return ProviderDetailComponent;
            }(base_components_1.BaseDetailComponent));
            exports_1("ProviderDetailComponent", ProviderDetailComponent);
        }
    }
});
//# sourceMappingURL=provider-detail.component.js.map