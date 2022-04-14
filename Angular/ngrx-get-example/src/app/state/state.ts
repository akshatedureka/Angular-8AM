import Customers from "../model/customers.model";

interface CustomersState{
    loading:boolean;
    customers:Customers;
    error:string;
}
export default CustomersState;