System.register(['angular2/core', './base.property'], function(exports_1, context_1) {
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
    var core_1, base_property_1;
    var TextProperty;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_property_1_1) {
                base_property_1 = base_property_1_1;
            }],
        execute: function() {
            TextProperty = (function (_super) {
                __extends(TextProperty, _super);
                function TextProperty() {
                    _super.apply(this, arguments);
                }
                TextProperty = __decorate([
                    core_1.Component({
                        selector: 'text-property',
                        inputs: ['field', 'displayName', 'sheet', 'edit'],
                        template: "\n       <h4 class=\"ui top attached block header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input *ngIf=\"edit\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextProperty);
                return TextProperty;
            }(base_property_1.BaseProperty));
            exports_1("TextProperty", TextProperty);
        }
    }
});
//# sourceMappingURL=text.property.js.map