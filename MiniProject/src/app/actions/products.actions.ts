import { createAction, props } from "@ngrx/store";
import Product from "../model/products.model";
import { PRODUCTS_LIST, PRODUCTS_LIST_FAIL, PRODUCTS_LIST_SUCCESS } from "../types/products.types";

export const productsListAction = createAction(PRODUCTS_LIST);
export const productsListActionSuccess = createAction(PRODUCTS_LIST_SUCCESS,props<{"products":Product[]}>());
export const productsListActionFail = createAction(PRODUCTS_LIST_FAIL,props<{"error":any}>());