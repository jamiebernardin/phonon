/**
 * Created by jbernardin on 5/2/16.
 */
/**
 * Created by jbernardin on 3/9/16.
 */
import {Component} from '@angular/core'
import {BaseDetailComponent, BaseRowComponent, BaseSearchComponent} from '../framework/base.components'
import {BaseProperty, StringProperty, BooleanProperty, IntegerProperty, DateTimeProperty, SelectProperty, SubSelectProperty, TextProperty } from '../framework/properties'
import {EntityService, Entity} from '../framework/entity.service'
import {Router} from '@angular/router'


@Component({
    templateUrl: '../../templates/_ComponentName_-detail.html',
    providers: [EntityService]
})
export class _ComponentName_DetailComponent extends BaseDetailComponent {
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getPath(): string {
        return '_componentName_';
    }
    getSearchRoute() : string {
        return '_componentName_-search';
    }
}

@Component({
    selector: '_componentName_-row',
    inputs: ['entity'],
    host: {
        class: 'row'
    },
    template: `
    <div class="ui large form segment">
      <div class="ui value">
        {{ entity.getObj().DISPLAY_FIELD }}
      </div>
      <p></p>
      <div class="ui label">
        ROW_DETAIL_FIELD
        <div class="detail">{{entity.getObj().ROW_DETAIL_FIELD}}</div>
      </div>
    </div>
  `
})
export class _ComponentName_RowComponent extends BaseRowComponent { }


@Component({
    selector: '_componentName_-search',
    providers: [EntityService],
    template: `
     <div class="ui text menu">
     <h3 class="ui item">{{getName()}}:</h3>
       <div class="ui item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..."  [(ngModel)]="searchStr" (keyup)="search()">
              <i class="search link icon"></i>
            </div>
        </div>
        <button class="ui basic button" (click)="create()">New</button>
     </div>
    <!--</form>-->
    <div class="search results">
      <_componentName_-row
        *ngFor="let entity of entities"
        [entity]="entity"
        (click)="onSelect(entity)">
      </_componentName_-row>
    </div>
  `
})
export class _ComponentName_SearchComponent extends BaseSearchComponent {
    searchStr: string = "";
    entities: Entity[] = [];
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getName(): string {
        return "_ComponentName_";
    }
    getPath(): string {
        return '_componentName_';
    }
    getDetailRoute() : string {
        return '_componentName_-detail';
    }
}

