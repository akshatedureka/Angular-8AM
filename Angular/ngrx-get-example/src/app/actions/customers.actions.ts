import { createAction, props } from "@ngrx/store";
import Customers from "../model/customers.model";
import { CUSTOMERS_LIST, CUSTOMERS_LIST_FAIL, CUSTOMERS_LIST_SUCCESS } from "../types/customers.types";

export const customersList = createAction(CUSTOMERS_LIST);
export const customersListSuccess = createAction(CUSTOMERS_LIST_SUCCESS,props<{"customers":Customers}>());
export const customersListFail = createAction(CUSTOMERS_LIST_FAIL,props<{"error":string}>());