import { createReducer, on } from "@ngrx/store";
import { loginAction, loginActionFail, loginActionSuccess } from "../actions/login.actions";
import LoginState from "../state/login.state";
const initialState:LoginState = {
    loading:false,
    login:{login:""},
    error:""
}
let _loginReducer = createReducer(initialState,on(loginAction,(state)=>{
    return{
        ...state,
        loading:false,
        login:{login:""},
        error:""
    }
}),on(loginActionSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        login:action.status,
        error:""      
    }
}),on(loginActionFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        login:{login:""},
        error:action.error
    }
}));
export function loginReducer(state:any,action:any):any{
    return _loginReducer(state,action);
}