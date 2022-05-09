import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
@Injectable({
    providedIn:"root"
})
class MyService{
    //sub = new Subject<string>();
    sub = new BehaviorSubject<string>("Hello");
    
    receiveMsg(msg:string){
        this.sub.next(msg);
    }
    sendMsg():Observable<string>{
        return this.sub.asObservable();
    }
}
export default MyService;