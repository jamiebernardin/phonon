import { NgModule,Component, OnInit, Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Router, Routes, CanActivate} from '@angular/router';
import {Location, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/Observable/empty';
import {BaseProperty, StringProperty, BooleanProperty, DateTimeProperty, TextProperty,
    IntegerProperty, SelectProperty, SubSelectProperty, CollectionProperty}  from './framework/properties'
import {LoginComponent} from './components/login'
import {EntityService} from './framework/entity.service'
import {LoginService} from './framework/login.service'
//BEGIN_MODEL_IMPORTS
import {Animal_typeRowComponent, Animal_typeDetailComponent, Animal_typeSearchComponent} from './components/animal_type'
import {PetRowComponent, PetDetailComponent, PetSearchComponent} from './components/pet'
import {PersonRowComponent, PersonDetailComponent, PersonSearchComponent} from './components/person'
//END_MODEL_IMPORTS

@Component({
    template: ''
})
export class EmptyPanel {}

const routes: Routes = [
    //BEGIN_ROUTES
    {path: 'animal_type-detail', component: Animal_typeDetailComponent},
    {path: 'animal_type-search', component: Animal_typeSearchComponent},
    {path: 'pet-detail', component: PetDetailComponent},
    {path: 'pet-search', component: PetSearchComponent},
    {path: 'person-detail', component: PersonDetailComponent},
    {path: 'person-search', component: PersonSearchComponent},
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
                this.route('person-search');
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
        this.route('Empty');
    }
    route(name: string) {
        console.log('calling route:' + name);
        console.log('is logged in...' + this._loginService.isLoggedIn);
        if (this._loginService.isLoggedIn) {
            this._router.navigate([name]);
        } else {
            this._router.navigate(['empty']);
        }
    }
    ngOnInit() {
        this._loginService.checkLoggedIn().
            map(data => this._router.navigate(['person-search'])).catch(err => Observable.empty()).subscribe();
        Observable.timer(this.POLL_INTERVAL, this.POLL_INTERVAL).subscribe(t => {
            this._loginService.checkLoggedIn().catch(err => Observable.empty()).subscribe();
        });
    }
}

@NgModule({
    declarations: [
        //BEGIN_MODEL_DECS
        Animal_typeRowComponent, Animal_typeDetailComponent, Animal_typeSearchComponent,
        PetRowComponent, PetDetailComponent, PetSearchComponent,
        PersonRowComponent, PersonDetailComponent, PersonSearchComponent,
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

