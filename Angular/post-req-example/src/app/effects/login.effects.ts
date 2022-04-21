import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap,map, of } from "rxjs";
import { loginAction, loginActionFail, loginActionSuccess } from "../actions/login.actions";
import { Login } from "../model/login.model";
import { loginService } from "../services/login.service";

@Injectable({
    providedIn:"root"
})
class LoginEffects{
    constructor(private actions$:Actions,
                private service:loginService){}
    login$ = createEffect(()=> this.actions$.pipe(
        ofType(loginAction),
        mergeMap((action:any)=> this.service.login_fn(action.login_details).pipe(map((posRes:Login)=>{
            return loginActionSuccess({"status":posRes})
        }),catchError((err)=> of(loginActionFail({"error":"Network Error"})))))
    ))
}
export default LoginEffects;