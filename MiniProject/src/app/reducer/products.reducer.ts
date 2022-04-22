import { createReducer, on } from "@ngrx/store";
import { productsListAction, productsListActionFail, productsListActionSuccess } from "../actions/products.actions";
import ProductsState from "../state/products.state";

const initialState:ProductsState = {
    loading:false,
    error:"",
    products:[]
}


const _productsReducer = createReducer(initialState,on(productsListAction,(state)=>{
    return{
        ...state,
        loading:false,
        products:[],
        error:""
    }
}),on(productsListActionSuccess,(state,action)=>{
   return{
        ...state,
        loading:true,
        products:action.products,
        error:""    
   } 
}),on(productsListActionFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:[],
        error:action.error
    }
}))

export function productsReducer(state:any,action:any){
    return _productsReducer(state,action);
}

