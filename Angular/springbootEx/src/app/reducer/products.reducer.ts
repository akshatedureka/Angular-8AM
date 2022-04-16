import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { productsList, productsListFail, productsListSuccess } from "../actions/products.actions";
import ProductsState from "../state/products.state";

const initialState:ProductsState = {
    loading:false,
    products:[],
    error:""
}

const _productsReducer = createReducer(initialState,on(productsList,(state)=>{
    return{
        ...state,
        loading:false,
        products:[],
        error:""
    }
}),on(productsListSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:action.products,
        error:""
    }
}),on(productsListFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:[],
        error:action.error
    }
}));


export function productsReducer(state:any,action:any){
    return _productsReducer(state,action);
}

