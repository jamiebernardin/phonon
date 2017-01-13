/**
 * Created by jbernardin on 4/14/16.
 */
import {BaseProperty} from './properties'
import * as _ from 'lodash'

// for associated entities
export enum Status {
    Delete,
    Add,
    Keep,
    Available
}

export class EntityWrapper {
    public entity: any;
    public status: Status;
    constructor( entity: any, status: Status ) {
        this.entity = entity; this.status = status;
    }
    static filter(items: EntityWrapper[], stati: Status[]) : EntityWrapper[] {
        let newItems =  _.filter(items, item => {
            let retVal = false;
            for (let status of stati) {
                if (typeof item.status !== 'undefined' && item.status === status) {
                    retVal = true;
                }
            }
            return retVal;
        });
        return (typeof newItems !== 'undefined') ? newItems: [];
    }
}

//  end associated entities
export class PropertySheet {
    properties: BaseProperty<any>[] = [];
    entity: any;
    constructor(entity: any) {
        this.entity = entity;
    }
    findProperty(name: string) : any {
        let retVal = null;
        for (var prop of this.properties) {
            if (prop.field === name) {
                retVal = prop;
            }
        }
        return retVal;
    }
    setEntity(entity: any) {
        this.entity = entity;
        //for (let prop of this.properties) {
        //    prop.ngOnInit();
        //}
    }
    addProperty(prop: BaseProperty<any>) {
        this.properties.push(prop);
    }
    getValue(field: string) {
        return (typeof this.entity !== 'undefined') ? this.entity[field] : '';
    }
    getChangedValues() : any {
        let vals = {};
        for (let prop of this.properties) {
            if (prop.newValue !== this.entity[prop.field]) {
                vals[prop.field] = prop.newValue;
            }
        }
        return vals;
    }
    getAssociationChanges() : any {
        let vals = {};
        for (let prop of this.properties) {
            let changes = prop.getAssociationChanges();
            if (changes != null) {
                vals[prop.field] = changes;
            }
        }
        return _.isEmpty(vals) ? null: {changes:vals};
    }
}