/**
 * Created by jamie on 4/17/16.
 */
/**
 * Created by jbernardin on 3/9/16.
 */
import {Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http'
import {Observable} from 'rxjs/Rx'
import {LoginService} from './login.service'

// the rest path
export interface EntityPath {
    getPath(): string;
}


export class Entity {
    constructor( private obj: any) { }
    getObj() : any {
        return this.obj;
    }
}

@Injectable()
export class EntityService {
    private searchQuery: string = '?searchStr=#';
    handleError(error: any) {
        if (error.status === 401) {
        }
        return Observable.throw(error);
    }
    constructor(private _http: Http, private _loginService: LoginService ) {}
    search(path:string, searchStr: string) : Observable<any> {
        let url = path + this.searchQuery.replace('#', searchStr);
        return this._http.get(url, this._loginService.getRequestOptions()).map(
            res => res.json().map(obj => new Entity(obj))
        ).catch(this.handleError);
    }
    get(path, id: string) {
        let url = path + '/' +  id;
        return this._http.get(url, this._loginService.getRequestOptions()).map(
            res => new Entity(res.json())
        ).catch(this.handleError);
    }
    getUrl(url: string) {
        return this._http.get(url, this._loginService.getRequestOptions()).map(
                res => res.json()
        ).catch(this.handleError);
    }
    query(path: string, action: string, data: any) {
        var url = path + '/' +  action;
        return this._http.post(url, JSON.stringify(data), this._loginService.getRequestOptions()).map(
                res => res.json().map(obj => new Entity(obj))
        ).catch(this.handleError);
    }
    save(path: string, id: string, mods: any) {
        let url = path + '/' +  id;
        return this._http.put(url, JSON.stringify(mods), this._loginService.getRequestOptions());
    }
    delete(path: string, id: string) {
        let url = path + '/' +  id;
        return this._http.delete(url, this._loginService.getRequestOptions());
    }
    create(path: string, obj: any) {
        let url = path;
        return this._http.post(url, JSON.stringify(obj), this._loginService.getRequestOptions());
    }
}


