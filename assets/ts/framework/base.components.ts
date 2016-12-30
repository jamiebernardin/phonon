import {Component, OnInit, Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Entity, EntityService, EntityPath} from './entity.service'
import {PropertySheet} from './property.sheet'


export class RouteSupport {
    putParam(name: string, val: any) {
        this.data[name] = val;
    }
    takeParam(name: string) : any {
        let retVal = this.data[name];
        delete this.data[name];
        return retVal;
    }
    private data = {};
    private static instance: RouteSupport;
    public static get() : RouteSupport {
        return RouteSupport.instance||(RouteSupport.instance = new RouteSupport());
    }
}

export class BaseRowComponent {
    entity: Entity;
}

export class BaseDetailComponent implements OnInit, EntityPath {
    router: Router;
    entityService: EntityService;
    edit: boolean;
    create: boolean;
    // hack to get around routeparams string only constraint (which is wrong)
    sheet: any;
    private searchStr: string;
    constructor(entityService: EntityService, router:Router) {
        this.router = router;
        this.entityService = entityService;
        this.sheet =  new PropertySheet({});
    }
    getPath() : string {
        return null;
    }
    getSearchRoute() : string {
        return null;
    }
    ngOnInit() {
        this.searchStr = RouteSupport.get().takeParam('searchStr');
        this.create = (typeof RouteSupport.get().takeParam('create') !== 'undefined');
        this.edit = this.create;
        this.sheet.setEntity(RouteSupport.get().takeParam('entity'));
    }
    back() {
        RouteSupport.get().putParam('searchStr', this.searchStr);
        this.router.navigate( [this.getSearchRoute()] );
    }
    doEdit() {
        this.edit = true;
    }
    doDelete() {
        this.entityService.delete(this.getPath(), this.sheet.getValue('id')).subscribe(
            res => {
                this.back();
            })
    }
    cancel() {
        this.edit = false;
        if (this.create) {
            this.back();
        }
    }
    routeToItem(item) {
        RouteSupport.get().putParam('entity', item.obj);
        RouteSupport.get().putParam('searchStr', '');
        this.router.navigate( [item.path+'-detail'] );
    }
    save() {
        let changes = this.sheet.getChangedValues();
        if (Object.getOwnPropertyNames(changes).length !== 0) {
            if (this.create) {
                this.entityService.create(this.getPath(), changes).subscribe(
                        res => {
                            this.edit = false;
                            this.sheet.setEntity(res.json());
                            this.create = false;
                    })
            }
            else {
                this.entityService.save(this.getPath(), this.sheet.getValue('id'), changes).subscribe(
                    res => {
                        this.sheet.setEntity(res.json());
                        this.edit = false;
                })
            }
        } else {
            this.edit = false;
        }
    }
}

export class BaseSearchComponent implements OnInit, EntityPath {
    searchStr: string = "";
    entities: Entity[] = [];
    router: Router;
    entityService: EntityService;
    constructor(entityService: EntityService, router:Router) {
        this.router = router;
        this.entityService = entityService;
    }
    getPath() : string {
        return null;
    }
    getDetailRoute() : string {
        return null;
    }
    search() {
        var that = this;
        this.entities = [];
        this.entityService.search(this.getPath(), this.searchStr).subscribe(
                entities => Array.prototype.push.apply(that.entities, entities)
        )
    }
    onSelect(entity: Entity) {
        RouteSupport.get().putParam('entity', entity.getObj());
        RouteSupport.get().putParam('searchStr', this.searchStr);
        this.router.navigate( [this.getDetailRoute()] );
    }
    create() {
        RouteSupport.get().putParam('entity', {});
        RouteSupport.get().putParam('searchStr', this.searchStr);
        RouteSupport.get().putParam('create', true);
        this.router.navigate( [this.getDetailRoute() ] );
    }
    ngOnInit() {
        this.searchStr = RouteSupport.get().takeParam('searchStr');
        if (this.searchStr !== null) {
            this.search();
        }
    }
}

