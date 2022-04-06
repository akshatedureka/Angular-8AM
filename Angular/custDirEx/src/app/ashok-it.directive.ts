import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ashokIT]'
})
export class AshokITDirective {

  @Input() var_one:any = "";
  @Input() var_two:any = "";


  constructor(private elementRef:ElementRef) { }

  @HostListener("mouseover") onmouseover(){
    this.elementRef.nativeElement.style.backgroundColor=this.var_one;
  }

  @HostListener("mouseleave") onmouseleave(){
    this.elementRef.nativeElement.style.backgroundColor = this.var_two;
  }

}
