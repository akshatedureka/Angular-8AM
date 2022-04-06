import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[ashokIT]'
})
export class AshokITDirective {
  constructor(private templateRef:TemplateRef<any>,
              private viewContainerRef:ViewContainerRef) { }
  //ElementRef --- custom attribute directive
  //TemplateRef --- custom structural directive
   @Input() set ashokIT(flag:boolean){
      if(flag){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();
      }
   }
}
