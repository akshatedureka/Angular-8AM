import { Component } from '@angular/core';
import { catchError, concatMap, first, from, interval, last, mergeMap, of, skip, take } from "rxjs"
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    // ngOnInit(){
    //     of("1","2","3","4","5").pipe(mergeMap(val=> of(`Num is ${val}`)))
    //       .subscribe((posRes)=>{
    //           console.log(posRes);
    //     },(errRes)=>{
    //       console.log(errRes);
    //     })
    // }

      constructor(private http:HttpClient){}


      // ngOnInit(){
      //     of("customers.php","customer.php")
      //       .pipe(mergeMap((val)=> this.http.get(`https://www.w3schools.com/angular/${val}`)),catchError((err)=>of(err.status))).subscribe((posRes)=>{
      //         console.log(posRes);
      //     })
      // }


    // ngOnInit(){
    //   of(1,2,3,4,5).pipe(concatMap((val)=>of(`The Num is ${val*10}`))).subscribe(console.log);
    // }


    // ngOnInit(){
    //     from([1,2,3,4,5]).subscribe(console.log);
    // }


    // ngOnInit(){
    //    interval(1000).subscribe(console.log);
    // }


    ngOnInit(){
      of(1,2,3,4,5).pipe(skip(3)).subscribe(console.log)
    }









}
