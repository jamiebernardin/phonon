System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var BaseProperty, BooleanProperty, IntegerProperty, StringProperty;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BaseProperty = (function () {
                function BaseProperty() {
                }
                BaseProperty.prototype.ngOnInit = function () {
                    this.newValue = this.sheet.getValue(this.field);
                    this.sheet.addProperty(this);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BaseProperty.prototype, "edit", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BaseProperty.prototype, "sheet", void 0);
                return BaseProperty;
            }());
            exports_1("BaseProperty", BaseProperty);
            BooleanProperty = (function (_super) {
                __extends(BooleanProperty, _super);
                function BooleanProperty() {
                    _super.apply(this, arguments);
                }
                BooleanProperty = __decorate([
                    core_1.Component({
                        selector: 'boolean-property',
                        inputs: ['field', 'displayName', 'sheet', 'edit'],
                        template: "\n       <h4 class=\"ui top attached block header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input *ngIf=\"edit\" type=\"checkbox\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BooleanProperty);
                return BooleanProperty;
            }(BaseProperty));
            exports_1("BooleanProperty", BooleanProperty);
            IntegerProperty = (function (_super) {
                __extends(IntegerProperty, _super);
                function IntegerProperty() {
                    _super.apply(this, arguments);
                }
                IntegerProperty = __decorate([
                    core_1.Component({
                        selector: 'integer-property',
                        inputs: ['field', 'displayName', 'sheet', 'edit'],
                        template: "\n       <h4 class=\"ui top attached block header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input *ngIf=\"edit\" type=\"number\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], IntegerProperty);
                return IntegerProperty;
            }(BaseProperty));
            exports_1("IntegerProperty", IntegerProperty);
            StringProperty = (function (_super) {
                __extends(StringProperty, _super);
                function StringProperty() {
                    _super.apply(this, arguments);
                }
                StringProperty = __decorate([
                    core_1.Component({
                        selector: 'string-property',
                        inputs: ['field', 'displayName', 'sheet', 'edit'],
                        template: "\n       <h4 class=\"ui top attached block header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input *ngIf=\"edit\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StringProperty);
                return StringProperty;
            }(BaseProperty));
            exports_1("StringProperty", StringProperty);
        }
    }
});
//# sourceMappingURL=properties.js.map