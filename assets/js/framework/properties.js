System.register(["@angular/core", "./entity.service"], function (exports_1, context_1) {
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
    var core_1, entity_service_1, BaseProperty, BooleanProperty, IntegerProperty, StringProperty, TextProperty, DateTimeProperty, SelectProperty, CollectionProperty;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (entity_service_1_1) {
                entity_service_1 = entity_service_1_1;
            }
        ],
        execute: function () {
            BaseProperty = (function () {
                function BaseProperty() {
                }
                BaseProperty.prototype.ngOnInit = function () {
                    this.newValue = this.sheet.getValue(this.field);
                    if (typeof this.newValue === 'undefined') {
                        this.newValue = this.defaultValue;
                    }
                    this.sheet.addProperty(this);
                };
                BaseProperty.prototype.ngOnChanges = function (changes) {
                };
                return BaseProperty;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], BaseProperty.prototype, "edit", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], BaseProperty.prototype, "sheet", void 0);
            exports_1("BaseProperty", BaseProperty);
            BooleanProperty = (function (_super) {
                __extends(BooleanProperty, _super);
                function BooleanProperty() {
                    var _this = _super.call(this) || this;
                    _this.defaultValue = false;
                    return _this;
                }
                return BooleanProperty;
            }(BaseProperty));
            BooleanProperty = __decorate([
                core_1.Component({
                    selector: 'boolean-property',
                    inputs: ['field', 'displayName', 'sheet', 'edit'],
                    template: "\n       <h4 class=\"ui top attached header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input *ngIf=\"edit\" type=\"checkbox\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                }),
                __metadata("design:paramtypes", [])
            ], BooleanProperty);
            exports_1("BooleanProperty", BooleanProperty);
            IntegerProperty = (function (_super) {
                __extends(IntegerProperty, _super);
                function IntegerProperty() {
                    var _this = _super.call(this) || this;
                    _this.defaultValue = 0;
                    return _this;
                }
                return IntegerProperty;
            }(BaseProperty));
            IntegerProperty = __decorate([
                core_1.Component({
                    selector: 'integer-property',
                    inputs: ['field', 'displayName', 'sheet', 'edit'],
                    template: "\n       <h4 class=\"ui top attached header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input *ngIf=\"edit\" type=\"number\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                }),
                __metadata("design:paramtypes", [])
            ], IntegerProperty);
            exports_1("IntegerProperty", IntegerProperty);
            StringProperty = (function (_super) {
                __extends(StringProperty, _super);
                function StringProperty() {
                    var _this = _super.call(this) || this;
                    _this.defaultValue = '';
                    return _this;
                }
                return StringProperty;
            }(BaseProperty));
            StringProperty = __decorate([
                core_1.Component({
                    selector: 'string-property',
                    inputs: ['field', 'displayName', 'sheet', 'edit'],
                    template: "\n       <h4 class=\"ui top attached header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input *ngIf=\"edit\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                }),
                __metadata("design:paramtypes", [])
            ], StringProperty);
            exports_1("StringProperty", StringProperty);
            TextProperty = (function (_super) {
                __extends(TextProperty, _super);
                function TextProperty() {
                    var _this = _super.call(this) || this;
                    _this.defaultValue = '';
                    return _this;
                }
                return TextProperty;
            }(BaseProperty));
            TextProperty = __decorate([
                core_1.Component({
                    selector: 'text-property',
                    inputs: ['field', 'displayName', 'sheet', 'edit'],
                    template: "\n       <h4 class=\"ui top attached header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <textarea rows=\"6\" cols=\"50\" *ngIf=\"edit\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\"></textarea>\n  "
                }),
                __metadata("design:paramtypes", [])
            ], TextProperty);
            exports_1("TextProperty", TextProperty);
            DateTimeProperty = (function (_super) {
                __extends(DateTimeProperty, _super);
                function DateTimeProperty() {
                    var _this = _super.call(this) || this;
                    _this.defaultValue = '2017-01-01';
                    return _this;
                }
                return DateTimeProperty;
            }(BaseProperty));
            DateTimeProperty = __decorate([
                core_1.Component({
                    selector: 'datetime-property',
                    inputs: ['field', 'displayName', 'sheet', 'edit'],
                    template: "\n       <h4 class=\"ui top attached header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ sheet.getValue(field) }}\n       </div>\n       <input type=\"date\" *ngIf=\"edit\" class=\"ui attached segment\" name=\"field\" [(ngModel)]=\"newValue\">\n  "
                }),
                __metadata("design:paramtypes", [])
            ], DateTimeProperty);
            exports_1("DateTimeProperty", DateTimeProperty);
            SelectProperty = (function (_super) {
                __extends(SelectProperty, _super);
                function SelectProperty(elementRef, _entityService) {
                    var _this = _super.call(this) || this;
                    _this.elementRef = elementRef;
                    _this._entityService = _entityService;
                    _this.items = [];
                    _this.selectEmitter = new core_1.EventEmitter();
                    _this.defaultValue = 1;
                    return _this;
                }
                SelectProperty.prototype.getDisplayItem = function () {
                    var id = this.sheet.getValue(this.field);
                    var result = this.items.filter(function (item) {
                        return item.id === id;
                    });
                    return (result.length > 0) ? result[0][this.selectName] : '';
                };
                SelectProperty.prototype.onSelect = function (id) {
                    this.newValue = id;
                    this.selectEmitter.emit({ selectId: id });
                };
                SelectProperty.prototype.ngOnChanges = function () {
                    setTimeout(function () {
                        jQuery('.ui.dropdown').dropdown();
                    }, 10);
                };
                SelectProperty.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                    var that = this;
                    this._entityService.getUrl(this.itemsUrl).subscribe(function (items) {
                        Array.prototype.push.apply(that.items, items);
                        if (typeof items[0] !== 'undefined') {
                            that.onSelect(items[0].id);
                        }
                    });
                };
                return SelectProperty;
            }(BaseProperty));
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], SelectProperty.prototype, "selectEmitter", void 0);
            SelectProperty = __decorate([
                core_1.Component({
                    selector: 'select-property',
                    inputs: ['field', 'displayName', 'sheet', 'edit', 'itemsUrl', 'selectName'],
                    template: "\n       <h4 class=\"ui top attached header\">\n           {{ displayName }}\n      </h4>\n       <div *ngIf=\"!edit\" class=\"ui attached segment\">\n           {{ getDisplayItem() }}\n       </div>\n        <div *ngIf=\"edit\" class=\"ui attached segment\">\n        <select class=\"ui fluid dropdown\"  (change)=\"onSelect($event.target.value)\">\n            <option *ngFor=\"let item of items\" [selected]=\"item.id === sheet.getValue(field)\" [value] = \"item.id\">{{item[selectName]}}</option>\n        </select>\n        </div>\n\n  "
                }),
                __metadata("design:paramtypes", [core_1.ElementRef, entity_service_1.EntityService])
            ], SelectProperty);
            exports_1("SelectProperty", SelectProperty);
            CollectionProperty = (function (_super) {
                __extends(CollectionProperty, _super);
                function CollectionProperty(elementRef, _entityService) {
                    var _this = _super.call(this) || this;
                    _this.elementRef = elementRef;
                    _this._entityService = _entityService;
                    _this.routeItemOutlet = new core_1.EventEmitter();
                    _this.isMarkedForDelete = {};
                    _this.items = [];
                    return _this;
                }
                CollectionProperty.prototype.markClean = function () {
                    var collection = this.sheet.getValue(this.field);
                    console.log(this.field);
                    console.log(collection);
                    if (collection !== undefined) {
                        for (var _i = 0, _a = this.sheet.getValue(this.field); _i < _a.length; _i++) {
                            var item = _a[_i];
                            this.isMarkedForDelete[item] = false;
                        }
                    }
                };
                CollectionProperty.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                    this.markClean();
                    var itemsUrl = this.collection + '/items';
                    var that = this;
                    this._entityService.getUrl(itemsUrl).subscribe(function (items) {
                        Array.prototype.push.apply(that.items, items);
                        if (typeof items[0] !== 'undefined') {
                            that.onNewItemSelect(items[0].id);
                        }
                    });
                };
                CollectionProperty.prototype.onItemSelect = function (item) {
                    if (!this.edit) {
                        this.routeItemOutlet.emit({ obj: item, path: this.collection });
                    }
                    else {
                        this.isMarkedForDelete[item] = !this.isMarkedForDelete[item];
                    }
                };
                CollectionProperty.prototype.onNewItemSelect = function (id) {
                    this.newItem = id;
                    console.log(id);
                };
                CollectionProperty.prototype.ngOnChanges = function (changes) {
                    _super.prototype.ngOnChanges.call(this, changes);
                    if (typeof changes['edit'] !== 'undefined') {
                        if (!changes['edit'].currentValue) {
                            this.markClean();
                        }
                    }
                };
                return CollectionProperty;
            }(BaseProperty));
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], CollectionProperty.prototype, "routeItemOutlet", void 0);
            CollectionProperty = __decorate([
                core_1.Component({
                    selector: 'collection-property',
                    inputs: ['field', 'displayName', 'sheet', 'edit', 'collection', 'selectName'],
                    template: "\n      <div *ngIf=\"edit\">\n      <button class=\"small ui basic button\"  (click)=\"onNewItemSelect(item)><i class=\"add icon\"></i></button>\n      <select class=\"ui dropdown\" (change)=\"onNewItemSelect($event.target.value)\" >\n        <option *ngFor=\"let item of items\" [selected]=\"item.id === 1\" [value] = \"item.id\">{{item[selectName]}}</option>\n      </select>\n      </div>\n      <p *ngIf=\"edit\"></p>\n      <button class=\"medium ui basic button\"\n        *ngFor=\"let item of sheet.getValue(field)\"\n        [ngClass]=\"{red: isMarkedForDelete[item]}\"\n        (click)=\"onItemSelect(item)\">\n        <i *ngIf=\"edit\" class=\"remove icon\"></i>{{item.name}}\n      </button>\n  "
                }),
                __metadata("design:paramtypes", [core_1.ElementRef, entity_service_1.EntityService])
            ], CollectionProperty);
            exports_1("CollectionProperty", CollectionProperty);
            //@Component({
            //    selector: 'subselect-property',
            //    inputs: ['field', 'displayName', 'sheet', 'edit', 'itemsUrl', 'selectName', 'joinId', 'selectId'],
            //    template: `
            //       <h4 class="ui top attached header">
            //           {{ displayName }}
            //      </h4>
            //       <div *ngIf="!edit" class="ui attached segment">
            //           {{ getDisplayItem() }}
            //       </div>
            //        <div *ngIf="edit" class="ui attached segment">
            //        <select class="ui fluid search selection dropdown"  (change)="onSelect($event.target.value)">
            //            <option *ngFor="let item of items" [selected]="item.id === sheet.getValue(field)" [value] = "item.id">{{item[selectName]}}</option>
            //        </select>
            //        </div>
            //
            //  `
            //})
            //export class SubSelectProperty extends BaseProperty<Number> implements OnInit {
            //    items: any = [];
            //    itemsUrl: string;
            //    selectName: string;
            //    selectId: string;
            //    constructor(private elementRef: ElementRef, private _entityService: EntityService) {
            //        super();
            //        this.defaultValue = 1;
            //    }
            //    getDisplayItem() {
            //        var id = this.sheet.getValue(this.field);
            //        let result = this.items.filter(item => {
            //            return item.id === id
            //        });
            //        return (result.length > 0) ? result[0][this.selectName] : '';
            //    }
            //    onSelect(id: Number) {
            //        this.newValue = id;
            //    }
            //    updateSelectValue(id: number) {
            //        let that = this;
            //        while(this.items.length > 0) {
            //            this.items.pop();
            //        }
            //        this._entityService.getUrl(this.itemsUrl+'?selectId='+id).subscribe(
            //                items =>  Array.prototype.push.apply(that.items, items)
            //        );
            //    }
            //    ngOnInit() {
            //        super.ngOnInit();
            //        this.updateSelectValue(this.sheet.getValue(this.selectId));
            //        setTimeout(() => {
            //            jQuery('.ui.dropdown').dropdown();
            //        }, 10);
            //    }
            //}
        }
    };
});
//@Component({
//    selector: 'subselect-property',
//    inputs: ['field', 'displayName', 'sheet', 'edit', 'itemsUrl', 'selectName', 'joinId', 'selectId'],
//    template: `
//       <h4 class="ui top attached header">
//           {{ displayName }}
//      </h4>
//       <div *ngIf="!edit" class="ui attached segment">
//           {{ getDisplayItem() }}
//       </div>
//        <div *ngIf="edit" class="ui attached segment">
//        <select class="ui fluid search selection dropdown"  (change)="onSelect($event.target.value)">
//            <option *ngFor="let item of items" [selected]="item.id === sheet.getValue(field)" [value] = "item.id">{{item[selectName]}}</option>
//        </select>
//        </div>
//
//  `
//})
//export class SubSelectProperty extends BaseProperty<Number> implements OnInit {
//    items: any = [];
//    itemsUrl: string;
//    selectName: string;
//    selectId: string;
//    constructor(private elementRef: ElementRef, private _entityService: EntityService) {
//        super();
//        this.defaultValue = 1;
//    }
//    getDisplayItem() {
//        var id = this.sheet.getValue(this.field);
//        let result = this.items.filter(item => {
//            return item.id === id
//        });
//        return (result.length > 0) ? result[0][this.selectName] : '';
//    }
//    onSelect(id: Number) {
//        this.newValue = id;
//    }
//    updateSelectValue(id: number) {
//        let that = this;
//        while(this.items.length > 0) {
//            this.items.pop();
//        }
//        this._entityService.getUrl(this.itemsUrl+'?selectId='+id).subscribe(
//                items =>  Array.prototype.push.apply(that.items, items)
//        );
//    }
//    ngOnInit() {
//        super.ngOnInit();
//        this.updateSelectValue(this.sheet.getValue(this.selectId));
//        setTimeout(() => {
//            jQuery('.ui.dropdown').dropdown();
//        }, 10);
//    }
//}
//# sourceMappingURL=properties.js.map