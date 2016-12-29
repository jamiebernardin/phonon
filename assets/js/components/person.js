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
    var core_1, base_components_1, entity_service_1, router_1, PersonDetailComponent, PersonRowComponent, PersonSearchComponent;
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
            PersonDetailComponent = (function (_super) {
                __extends(PersonDetailComponent, _super);
                function PersonDetailComponent(entityService, router) {
                    return _super.call(this, entityService, router) || this;
                }
                PersonDetailComponent.prototype.getPath = function () {
                    return 'person';
                };
                PersonDetailComponent.prototype.getSearchRoute = function () {
                    return 'person-search';
                };
                return PersonDetailComponent;
            }(base_components_1.BaseDetailComponent));
            PersonDetailComponent = __decorate([
                core_1.Component({
                    templateUrl: '../../templates/Person-detail.html',
                    providers: [entity_service_1.EntityService]
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, router_1.Router])
            ], PersonDetailComponent);
            exports_1("PersonDetailComponent", PersonDetailComponent);
            PersonRowComponent = (function (_super) {
                __extends(PersonRowComponent, _super);
                function PersonRowComponent() {
                    return _super.apply(this, arguments) || this;
                }
                return PersonRowComponent;
            }(base_components_1.BaseRowComponent));
            PersonRowComponent = __decorate([
                core_1.Component({
                    selector: 'person-row',
                    inputs: ['entity'],
                    host: {
                        class: 'row'
                    },
                    template: "\n    <div class=\"ui large form segment\">\n      <div class=\"ui value\">\n        {{ entity.getObj().name }}\n      </div>\n      <p></p>\n      <div class=\"ui label\">\n        Age: \n        <div class=\"detail\">{{entity.getObj().age}}</div>\n      </div>\n      <div class=\"ui label\">\n        Handicap: \n        <div class=\"detail\">{{entity.getObj().handicap}}</div>\n      </div>\n    </div>"
                }),
                __metadata("design:paramtypes", [])
            ], PersonRowComponent);
            exports_1("PersonRowComponent", PersonRowComponent);
            PersonSearchComponent = (function (_super) {
                __extends(PersonSearchComponent, _super);
                function PersonSearchComponent(entityService, router) {
                    var _this = _super.call(this, entityService, router) || this;
                    _this.searchStr = "";
                    _this.entities = [];
                    return _this;
                }
                PersonSearchComponent.prototype.getName = function () {
                    return "Person";
                };
                PersonSearchComponent.prototype.getPath = function () {
                    return 'person';
                };
                PersonSearchComponent.prototype.getDetailRoute = function () {
                    return 'person-detail';
                };
                return PersonSearchComponent;
            }(base_components_1.BaseSearchComponent));
            PersonSearchComponent = __decorate([
                core_1.Component({
                    selector: 'person-search',
                    providers: [entity_service_1.EntityService],
                    template: "\n     <div class=\"ui text menu\">\n     <h3 class=\"ui item\">{{getName()}}:</h3>\n       <div class=\"ui item\">\n            <div class=\"ui icon input\">\n              <input type=\"text\" placeholder=\"Search...\"  [(ngModel)]=\"searchStr\" (keyup)=\"search()\">\n              <i class=\"search link icon\"></i>\n            </div>\n        </div>\n        <button class=\"ui basic button\" (click)=\"create()\">New</button>\n     </div>\n    <!--</form>-->\n    <div class=\"search results\">\n      <person-row\n        *ngFor=\"let entity of entities\"\n        [entity]=\"entity\"\n        (click)=\"onSelect(entity)\">\n      </person-row>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, router_1.Router])
            ], PersonSearchComponent);
            exports_1("PersonSearchComponent", PersonSearchComponent);
        }
    };
});
//# sourceMappingURL=person.js.map