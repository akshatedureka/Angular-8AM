import { createFeatureSelector, createSelector } from "@ngrx/store";
import CustomersState from "../state/state";

export const customersSelector = createSelector(createFeatureSelector<CustomersState>("customers"),(state:CustomersState)=>{
    return state;
})