/**
 * Created by jbernardin on 5/2/16.
 */
/**
 * Created by jbernardin on 3/9/16.
 */
import {Component} from '@angular/core'
import {BaseDetailComponent, BaseRowComponent, BaseSearchComponent} from '../framework/base.components'
import {BaseProperty, StringProperty, BooleanProperty, IntegerProperty, DateTimeProperty,
        SelectProperty, SubSelectProperty, TextProperty, CollectionProperty } from '../framework/properties'
import {EntityService, Entity} from '../framework/entity.service'
import {Router} from '@angular/router'


@Component({
    templateUrl: '../../templates/Person-detail.html',
    providers: [EntityService]
})
export class PersonDetailComponent extends BaseDetailComponent {
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getPath(): string {
        return 'person';
    }
    getSearchRoute() : string {
        return 'person-search';
    }
}

@Component({
    selector: 'person-row',
    inputs: ['entity'],
    host: {
        class: 'row'
    },
    template: `
    <div class="ui large form segment">
      <div class="ui value">
        {{ entity.getObj().name }}
      </div>
      <p></p>
      <div class="ui label">
        Age: 
        <div class="detail">{{entity.getObj().age}}</div>
      </div>
      <div class="ui label">
        Handicap: 
        <div class="detail">{{entity.getObj().handicap}}</div>
      </div>
    </div>`
})
export class PersonRowComponent extends BaseRowComponent { }


@Component({
    selector: 'person-search',
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
      <person-row
        *ngFor="let entity of entities"
        [entity]="entity"
        (click)="onSelect(entity)">
      </person-row>
    </div>
  `
})
export class PersonSearchComponent extends BaseSearchComponent {
    searchStr: string = "";
    entities: Entity[] = [];
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getName(): string {
        return "Person";
    }
    getPath(): string {
        return 'person';
    }
    getDetailRoute() : string {
        return 'person-detail';
    }
}

