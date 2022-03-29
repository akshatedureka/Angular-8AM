import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
class ChildComponent{
    @Input() p_id:any;
    @Input() p_name:any;
    @Input() p_cost:any;
    @Output() bishes:EventEmitter<any> = new EventEmitter();

    clickMe(){
        this.bishes.emit({"key1":this.p_id,"key2":this.p_name,"key3":this.p_cost});
    }


}
export default ChildComponent;