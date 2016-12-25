/**
 * Created by jbernardin on 4/14/16.
 */
import {BaseProperty} from './properties'

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
    }
    addProperty(prop: BaseProperty<any>) {
        this.properties.push(prop);
    }
    getValue(field: string) {
        return (typeof this.entity !== 'undefined') ? this.entity[field] : '';
    }
    getChangedValues() : any {
        var vals = {};
        for (var prop of this.properties) {
            if (prop.newValue !== this.entity[prop.field]) {
                vals[prop.field] = prop.newValue;
            }
        }
        return vals;
    }
}