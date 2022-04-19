import { createAction, props } from "@ngrx/store";
import { Login } from "../model/login.model";
import { User } from "../model/user.model";
import {LOGIN,LOGIN_SUCCESS,LOGIN_FAIL} from "../types/login.types";
export const loginAction = createAction(LOGIN,props<{"login_details":User}>());
export const loginActionSuccess = createAction(LOGIN_SUCCESS,props<{"status":Login}>());
export const loginActionFail = createAction(LOGIN_FAIL,props<{"error":any}>());