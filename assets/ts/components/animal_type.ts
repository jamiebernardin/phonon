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
    templateUrl: '../../templates/Animal_type-detail.html',
    providers: [EntityService]
})
export class Animal_typeDetailComponent extends BaseDetailComponent {
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getPath(): string {
        return 'animal_type';
    }
    getSearchRoute() : string {
        return 'animal_type-search';
    }
}

@Component({
    selector: 'animal_type-row',
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
        Life Expectancy: 
        <div class="detail">{{entity.getObj().life_expectancy}}</div>
      </div>
    </div>`
})
export class Animal_typeRowComponent extends BaseRowComponent { }


@Component({
    selector: 'animal_type-search',
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
      <animal_type-row
        *ngFor="let entity of entities"
        [entity]="entity"
        (click)="onSelect(entity)">
      </animal_type-row>
    </div>
  `
})
export class Animal_typeSearchComponent extends BaseSearchComponent {
    searchStr: string = "";
    entities: Entity[] = [];
    constructor(entityService: EntityService, router:Router) {
        super(entityService, router);
    }
    getName(): string {
        return "Animal_type";
    }
    getPath(): string {
        return 'animal_type';
    }
    getDetailRoute() : string {
        return 'animal_type-detail';
    }
}

