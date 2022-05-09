import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:"root"
})

class DemoService{
    sub = new Subject<boolean>();

    myFun(){
       this.sub.next(true); 
    }

    myFun1():Observable<boolean>{
        return this.sub.asObservable();
    }


}

export default DemoService;