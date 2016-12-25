/**
 * Created by jbernardin on 4/30/16.
 */
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http'
import {Observable} from 'rxjs/rx'
import 'rxjs/add/operator/map';



@Injectable()
export class LoginService  {
    public isLoggedIn: boolean = false;
    private TOKEN_KEY: string = 'token';
    private ID_KEY: string = 'id'
    private getJwt() : string {
        return localStorage.getItem(this.TOKEN_KEY);
    }
    constructor(private _http: Http) {}
    public checkLoggedIn() {
        let id = window.localStorage.getItem(this.ID_KEY);
        let url = 'app_user/' + id;
        return this._http.get(url, this.getRequestOptions()).
            map(res => {
                let data = res.json();
                this.isLoggedIn = true;
                return data;
            }).catch(err => {
                this.logout();
                return  Observable.throw("Expired or invalid... ending session");
            });
    }
    public  getRequestOptions() : RequestOptions {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.getJwt() });
        return new RequestOptions({ headers: headers });
    }
    public login(email: string, password: string) : Observable<Response> {
        let url = 'auth';
        return this._http.post(url, JSON.stringify({'email': email, 'password': password}))
            .map(res => {
                let data = res.json();
                if (typeof data.token !== 'undefined') {
                    window.localStorage.setItem(this.TOKEN_KEY, data.token);
                    window.localStorage.setItem(this.ID_KEY, data.user.id);
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                }
                return data;
            })
    }
    public logout() {
        window.localStorage.removeItem(this.TOKEN_KEY);
        window.localStorage.removeItem(this.ID_KEY);
        this.isLoggedIn = false;
    }
}