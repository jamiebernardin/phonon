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
    var core_1, base_components_1, entity_service_1, router_1, CourseDetailComponent, CourseRowComponent, CourseSearchComponent, _a, _b;
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
            CourseDetailComponent = (function (_super) {
                __extends(CourseDetailComponent, _super);
                function CourseDetailComponent(entityService, router) {
                    return _super.call(this, entityService, router) || this;
                }
                CourseDetailComponent.prototype.getPath = function () {
                    return 'course';
                };
                CourseDetailComponent.prototype.specialityChanged = function (event) {
                    var prop = this.sheet.findProperty('medical_subspeciality');
                    prop.updateSelectValue(event.selectId);
                };
                CourseDetailComponent.prototype.getSearchRoute = function () {
                    return 'course-search';
                };
                return CourseDetailComponent;
            }(base_components_1.BaseDetailComponent));
            CourseDetailComponent = __decorate([
                core_1.Component({
                    templateUrl: '../../templates/course-detail.html',
                    providers: [entity_service_1.EntityService]
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
            ], CourseDetailComponent);
            exports_1("CourseDetailComponent", CourseDetailComponent);
            CourseRowComponent = (function (_super) {
                __extends(CourseRowComponent, _super);
                function CourseRowComponent() {
                    return _super.apply(this, arguments) || this;
                }
                return CourseRowComponent;
            }(base_components_1.BaseRowComponent));
            CourseRowComponent = __decorate([
                core_1.Component({
                    selector: 'course-row',
                    inputs: ['entity'],
                    host: {
                        class: 'row'
                    },
                    template: "\n    <div class=\"ui large form segment\">\n      <div class=\"ui value\">\n        {{ entity.getObj().name }}\n      </div>\n      <p></p>\n      <div class=\"ui label\">\n        Number of Credits\n        <div class=\"detail\">{{entity.getObj().number_of_credits}}</div>\n      </div>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [])
            ], CourseRowComponent);
            exports_1("CourseRowComponent", CourseRowComponent);
            CourseSearchComponent = (function (_super) {
                __extends(CourseSearchComponent, _super);
                function CourseSearchComponent(entityService, router) {
                    var _this = _super.call(this, entityService, router) || this;
                    _this.searchStr = "";
                    _this.entities = [];
                    return _this;
                }
                CourseSearchComponent.prototype.getPath = function () {
                    return 'course';
                };
                CourseSearchComponent.prototype.getDetailRoute = function () {
                    return 'course-detail';
                };
                return CourseSearchComponent;
            }(base_components_1.BaseSearchComponent));
            CourseSearchComponent = __decorate([
                core_1.Component({
                    selector: 'course-search',
                    providers: [entity_service_1.EntityService],
                    template: "\n     <div class=\"ui text menu\">\n     <h3 class=\"ui item\">Course:</h3>\n       <div class=\"ui item\">\n            <div class=\"ui icon input\">\n              <input type=\"text\" placeholder=\"Search...\"  [(ngModel)]=\"searchStr\" (keyup)=\"search()\">\n              <i class=\"search link icon\"></i>\n            </div>\n        </div>\n        <button class=\"ui basic button\" (click)=\"create()\">New</button>\n     </div>\n    <!--</form>-->\n    <div class=\"search results\">\n      <course-row\n        *ngFor=\"let entity of entities\"\n        [entity]=\"entity\"\n        (click)=\"onSelect(entity)\">\n      </course-row>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [entity_service_1.EntityService, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
            ], CourseSearchComponent);
            exports_1("CourseSearchComponent", CourseSearchComponent);
        }
    };
});
//# sourceMappingURL=course.js.map