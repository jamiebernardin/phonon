import { NgModule,Component, OnInit, Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Router, Routes, CanActivate} from '@angular/router';
import {Location, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/empty';
import {BaseProperty, StringProperty, BooleanProperty, DateTimeProperty, TextProperty,
    IntegerProperty, SelectProperty, CollectionProperty}  from './framework/properties'
import {LoginComponent} from './components/login'
import {EntityService} from './framework/entity.service'
import {LoginService} from './framework/login.service'
//BEGIN_MODEL_IMPORTS
//END_MODEL_IMPORTS

@Component({
    template: ''
})
export class EmptyPanel {}

const routes: Routes = [
    //BEGIN_ROUTES
    //END_ROUTES
    {path: 'empty',  component: EmptyPanel}
];


@Component({
    selector: 'app',
    templateUrl: '../templates/app.component.html',
    providers: [ LoginService],
})
export class AppComponent implements OnInit {
    POLL_INTERVAL: number = 60000;
    error: string;
    constructor(location: Location, private _loginService: LoginService,private _router: Router) { }
    login(event) {
        this._loginService.login(event.email, event.password).subscribe(
            () => {
                this.route('FIRST_MODEL-search');
                this.error = '';
            },
                err => {
                this.route('empty');
                this.error = 'Invalid email or password.  Please try again.'
            }
        )
    }
    logout() {
        this._loginService.logout();
        this.route('empty');
    }
    route(name: string) {
        if (this._loginService.isLoggedIn) {
            this._router.navigate([name]);
        } else {
            this._router.navigate(['empty']);
        }
    }
    ngOnInit() {
        this._loginService.checkLoggedIn().
            map(data => this._router.navigate(['FIRST_MODEL-search'])).catch(err => Observable.empty()).subscribe();
        Observable.timer(this.POLL_INTERVAL, this.POLL_INTERVAL).subscribe(t => {
            this._loginService.checkLoggedIn().catch(err => Observable.empty()).subscribe();
        });
    }
}

@NgModule({
    declarations: [
        //BEGIN_MODEL_DECS
        //END_MODEL_DECS
        AppComponent, EmptyPanel, StringProperty, BooleanProperty, SelectProperty,
        DateTimeProperty, TextProperty, IntegerProperty, LoginComponent, CollectionProperty
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes) // <-- routes
    ],
    bootstrap: [ AppComponent ],
    providers: [
        LoginService, EntityService,
        {provide:APP_BASE_HREF, useValue: '/'},
        {provide:LocationStrategy, useClass: HashLocationStrategy}
    ]
})
export class PhononModule {
}

platformBrowserDynamic().bootstrapModule(PhononModule)
    .catch((err: any) => console.error(err));

