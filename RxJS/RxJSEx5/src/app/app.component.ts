import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'RxJSEx5';
    counter:number = 0;
    searchControl:FormControl = new FormControl();
      
    // ngOnInit(){
    //    fromEvent(document,"click").pipe(
    //      switchMap(()=>interval(500))
    //    ).subscribe(val=>this.counter=val)
    // }


    ngOnInit(){
      this.searchControl.valueChanges.pipe(debounceTime(5000),switchMap(()=> interval(500))).subscribe(val=>this.counter=val);
    }



}
