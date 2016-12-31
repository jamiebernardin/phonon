/**
 * Created by jbernardin on 5/2/16.
 */
/**
 * Created by jbernardin on 3/9/16.
 */
import {Component} from '@angular/core'
import {BaseDetailComponent, BaseRowComponent, BaseSearchComponent} from '../framework/base.components'
import {BaseProperty, StringProperty, BooleanProperty, IntegerProperty, DateTimeProperty,
        SelectProperty, TextProperty, CollectionProperty } from '../framework/properties'
import {EntityService, Entity} from '../framework/entity.service'
import {Router} from '@angular/router'


@Component({
    templateUrl: '../../templates/Pet-detail.html',
    providers: [EntityService]
})
export class PetDetailComponent extends BaseDetailComponent {
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getPath(): string {
        return 'pet';
    }
    getSearchRoute() : string {
        return 'pet-search';
    }
}

@Component({
    selector: 'pet-row',
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
        Color: 
        <div class="detail">{{entity.getObj().color}}</div>
      </div>
    </div>`
})
export class PetRowComponent extends BaseRowComponent { }


@Component({
    selector: 'pet-search',
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
      <pet-row
        *ngFor="let entity of entities"
        [entity]="entity"
        (click)="onSelect(entity)">
      </pet-row>
    </div>
  `
})
export class PetSearchComponent extends BaseSearchComponent {
    searchStr: string = "";
    entities: Entity[] = [];
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getName(): string {
        return "Pet";
    }
    getPath(): string {
        return 'pet';
    }
    getDetailRoute() : string {
        return 'pet-detail';
    }
}

