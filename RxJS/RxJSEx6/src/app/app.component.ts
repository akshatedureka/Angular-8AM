import { Component } from '@angular/core';
import { combineLatest, interval, Subject, withLatestFrom,map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'RxJSEx6';
    fwArrays:Array<any> = ["Angular","ReactJS","VueJS"];
    backendArray:Array<any> = ["MongoDB","CassandraDB","Oracle"];


    fwSubject = new Subject();
    backendSubject = new Subject();


    fwChange($event:any){
      this.fwSubject.next($event.target.value);
    }

    backendChange($event:any){
        this.backendSubject.next($event.target.value);
    }


    // ngOnInit(){
    //    combineLatest([this.fwSubject.asObservable(),this.backendSubject.asObservable()])
    //     .subscribe(console.log);
    // }


    sub:any;


      ngOnInit(){
          // this.sub = this.fwSubject.asObservable()
          //     .pipe(withLatestFrom(this.backendSubject.asObservable()));
              
      
          // this.sub.subscribe((val:any)=>console.log(val));


          const source = this.fwSubject.asObservable();
          const secondSource = this.backendSubject.asObservable();
          const example = source.pipe(
            withLatestFrom(secondSource)
          );
          const subscribe = example.subscribe(val => console.log(val));
      
      }







}
