import { createReducer,on } from "@ngrx/store";
import { customersList, customersListFail, customersListSuccess } from "../actions/customers.actions";

import CustomersState from "../state/state";

const initialState:CustomersState = {
    loading:false,
    customers:{"records":[]},
    error:""
}

const _customersReducer = createReducer(initialState,on(customersList,(state:any)=>{
    return{
        ...state,
        loading:false,
        customers:{},
        error:""
    }
}),on(customersListSuccess,(state:any,action:any)=>{
    return{
        ...state,
        loading:action.loading,
        customers:action.customers,
        error:action.error
    }
}),on(customersListFail,(state:any,action:any)=>{
    return{
        ...state,
        loading:action.loading,
        customers:action.customers,
        error:action.error
    }
}))

export function customersReducer(state:any,action:any){
    return _customersReducer(state,action);
}


