import { Login } from "../model/login.model";

interface LoginState{
    loading:boolean;
    error:string;
    login:Login;
}
export default LoginState;