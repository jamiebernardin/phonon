/**
 * Created by jbernardin on 4/27/16.
 */
import {Component, Output, EventEmitter} from '@angular/core'
import {LoginService} from '../framework/login.service'
import {Router} from '@angular/router'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'login-panel',
    providers: [LoginService],
    inputs: ['error'],
    template: `
    <form class="ui form ">
      <div class="field">
        <label>Email</label>
        <input placeholder="email" type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="email">
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" placeholder="******" [ngModelOptions]="{standalone: true}"  [(ngModel)]="password">
      </div>
      <div class="ui basic submit button" (click)="login()">Submit</div>
    </form>
    <div *ngIf="error" class="ui bottom attached error message">
      {{error}}
    </div>
  `
})
export class LoginComponent  {
    email: string;
    password: string;
    error: string;
    @Output() loginSubmit = new EventEmitter<any>();
    constructor(private _loginService: LoginService, private _router:Router) { }
    login() {
        this.loginSubmit.emit({email: this.email, password: this.password});
    }
}