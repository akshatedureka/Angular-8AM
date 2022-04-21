import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from './actions/login.actions';
import { loginSelector } from './selector/login.selector';
import LoginState from './state/login.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'post-req-example';
    uname:any="";
    upwd:any="";
    result:any="";

    constructor(private store:Store<LoginState>){}

    _subscription(){
      this.store.select(loginSelector).subscribe((posRes)=>{
          this.result = posRes;
      },(errRes)=>{
        console.log(errRes);
      })
    }

    ngOnInit(){
        this._subscription();
    }


    login(){
        this.store.dispatch(loginAction({login_details:{"uname":this.uname,"upwd":this.upwd}}))
    }









}
