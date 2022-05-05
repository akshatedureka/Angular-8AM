import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, forkJoin } from 'rxjs';
import Demo1Service from './demo1.service';
import Demo2Service from './demo2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'RxJSEx2';
    response1:any;
    response2:any;

    subscription$:any;

    constructor(private service1:Demo1Service,
                private service2:Demo2Service){}
    
    _parallelCalls(){
        this.subscription$ = forkJoin([this.service1.getData().pipe(delay(10000)),
                  this.service2.getData().pipe(delay(20000))]).subscribe(([res1,res2])=>{
                    this.response1 = res1;
                    this.response2 = res2;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        })
    }

    ngOnInit(){
        //this._parallelCalls();
        this._delayEx();
    }

    _delayEx(){
        this.subscription$ = this.service1.getData().pipe(delay(10000));
    }




    ngOnDestroy(){
      this.subscription$.unsubscribe();
    }



}
