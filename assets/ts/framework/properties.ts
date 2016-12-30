/**
 * Created by jbernardin on 4/14/16.
 */
import {PropertySheet} from './property.sheet'
import {ElementRef, Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core'
import {EntityService} from './entity.service'

declare var jQuery: any;




export class BaseProperty<T>  {
    newValue: T;
    displayName: string;
    field: string;
    defaultValue: T;
    @Input() edit;
    @Input() sheet;
    ngOnInit() {
        this.newValue = this.sheet.getValue(this.field);
        if (typeof this.newValue === 'undefined') {
            this.newValue = this.defaultValue;
        }
        this.sheet.addProperty(this)

    }
}

@Component({
    selector: 'boolean-property',
    inputs: ['field', 'displayName', 'sheet', 'edit'],
    template: `
       <h4 class="ui top attached header">
           {{ displayName }}
      </h4>
       <div *ngIf="!edit" class="ui attached segment">
           {{ sheet.getValue(field) }}
       </div>
       <input *ngIf="edit" type="checkbox" class="ui attached segment" name="field" [(ngModel)]="newValue">
  `
})
export class BooleanProperty extends BaseProperty<Boolean>  {
    constructor() {
        super();
        this.defaultValue = false;
    }
}


@Component({
    selector: 'integer-property',
    inputs: ['field', 'displayName', 'sheet', 'edit'],
    template: `
       <h4 class="ui top attached header">
           {{ displayName }}
      </h4>
       <div *ngIf="!edit" class="ui attached segment">
           {{ sheet.getValue(field) }}
       </div>
       <input *ngIf="edit" type="number" class="ui attached segment" name="field" [(ngModel)]="newValue">
  `
})
export class IntegerProperty extends BaseProperty<Number>  {
    constructor() {
        super();
        this.defaultValue = 0;
    }
}


@Component({
    selector: 'string-property',
    inputs: ['field', 'displayName', 'sheet', 'edit'],
    template: `
       <h4 class="ui top attached header">
           {{ displayName }}
      </h4>
       <div *ngIf="!edit" class="ui attached segment">
           {{ sheet.getValue(field) }}
       </div>
       <input *ngIf="edit" class="ui attached segment" name="field" [(ngModel)]="newValue">
  `
})
export class StringProperty extends BaseProperty<String>  {
    constructor() {
        super();
        this.defaultValue = '';
    }
}


@Component({
    selector: 'text-property',
    inputs: ['field', 'displayName', 'sheet', 'edit'],
    template: `
       <h4 class="ui top attached header">
           {{ displayName }}
      </h4>
       <div *ngIf="!edit" class="ui attached segment">
           {{ sheet.getValue(field) }}
       </div>
       <textarea rows="6" cols="50" *ngIf="edit" class="ui attached segment" name="field" [(ngModel)]="newValue"></textarea>
  `
})
export class TextProperty extends BaseProperty<String>  {
    constructor() {
        super();
        this.defaultValue = '';
    }
}

@Component({
    selector: 'datetime-property',
    inputs: ['field', 'displayName', 'sheet', 'edit'],
    template: `
       <h4 class="ui top attached header">
           {{ displayName }}
      </h4>
       <div *ngIf="!edit" class="ui attached segment">
           {{ sheet.getValue(field) }}
       </div>
       <input type="date" *ngIf="edit" class="ui attached segment" name="field" [(ngModel)]="newValue">
  `
})
export class DateTimeProperty extends BaseProperty<String>  {
    constructor() {
        super();
        this.defaultValue = '2017-01-01';
    }
}

@Component({
    selector: 'select-property',
    inputs: ['field', 'displayName', 'sheet', 'edit', 'itemsUrl', 'selectName'],
    template: `
       <h4 class="ui top attached header">
           {{ displayName }}
      </h4>
       <div *ngIf="!edit" class="ui attached segment">
           {{ getDisplayItem() }}
       </div>
        <div *ngIf="edit" class="ui attached segment">
        <select class="ui fluid dropdown"  (change)="onSelect($event.target.value)">
            <option *ngFor="let item of items" [selected]="item.id === sheet.getValue(field)" [value] = "item.id">{{item[selectName]}}</option>
        </select>
        </div>

  `
})
export class SelectProperty extends BaseProperty<Number> implements OnInit, OnChanges {
    items: any = [];
    itemsUrl: string;
    selectName: string;
    @Output() selectEmitter = new EventEmitter<any>();
    constructor(private elementRef: ElementRef, private _entityService: EntityService) {
        super();
        this.defaultValue = 1;
    }
    getDisplayItem() {
        var id = this.sheet.getValue(this.field);
        let result = this.items.filter(item => {
                return item.id === id
            });
        return (result.length > 0) ? result[0][this.selectName] : '';
    }
    onSelect(id: Number) {
        this.newValue = id;
        this.selectEmitter.emit({selectId:id});
    }

    ngOnChanges() {
        setTimeout(() => {
            jQuery('.ui.dropdown').dropdown();
        }, 10);
    }
    ngOnInit() {
        super.ngOnInit();
        let that = this;
        this._entityService.getUrl(this.itemsUrl).subscribe(
            items =>  {
                Array.prototype.push.apply(that.items, items);
                if (typeof items[0] !== 'undefined') {
                    that.onSelect(items[0].id);
                }
            }
        );
    }
}


@Component({
    selector: 'subselect-property',
    inputs: ['field', 'displayName', 'sheet', 'edit', 'itemsUrl', 'selectName', 'joinId', 'selectId'],
    template: `
       <h4 class="ui top attached header">
           {{ displayName }}
      </h4>
       <div *ngIf="!edit" class="ui attached segment">
           {{ getDisplayItem() }}
       </div>
        <div *ngIf="edit" class="ui attached segment">
        <select class="ui fluid search selection dropdown"  (change)="onSelect($event.target.value)">
            <option *ngFor="let item of items" [selected]="item.id === sheet.getValue(field)" [value] = "item.id">{{item[selectName]}}</option>
        </select>
        </div>

  `
})
export class SubSelectProperty extends BaseProperty<Number> implements OnInit {
    items: any = [];
    itemsUrl: string;
    selectName: string;
    selectId: string;
    constructor(private elementRef: ElementRef, private _entityService: EntityService) {
        super();
        this.defaultValue = 1;
    }
    getDisplayItem() {
        var id = this.sheet.getValue(this.field);
        let result = this.items.filter(item => {
            return item.id === id
        });
        return (result.length > 0) ? result[0][this.selectName] : '';
    }
    onSelect(id: Number) {
        this.newValue = id;
    }
    updateSelectValue(id: number) {
        let that = this;
        while(this.items.length > 0) {
            this.items.pop();
        }
        this._entityService.getUrl(this.itemsUrl+'?selectId='+id).subscribe(
                items =>  Array.prototype.push.apply(that.items, items)
        );
    }
    ngOnInit() {
        super.ngOnInit();
        this.updateSelectValue(this.sheet.getValue(this.selectId));
        setTimeout(() => {
            jQuery('.ui.dropdown').dropdown();
        }, 10);
    }
}

@Component({
    selector: 'collection-property',
    inputs: ['field', 'displayName', 'sheet', 'edit'],
    template: `
       <div *ngIf="!edit" class="ui attached segment">
      <button
        *ngFor="let item of sheet.getValue(field)"
        (click)="onSelect(item)">{{item.name}}
      </button> }}
      </div>
  `
})
export class CollectionProperty extends BaseProperty<String>  {
    constructor() {
        super();
    }
    onSelect(item) {
        console.log(item);
    }
}


