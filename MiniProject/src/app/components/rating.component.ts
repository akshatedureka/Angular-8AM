import { Component, Input } from "@angular/core";

@Component({
    selector:"rating-component",
    templateUrl:"./rating.component.html"
})

class RatingComponent{
    @Input() rating;
    constructor(){
        this.rating = 0;
    }
}

export default RatingComponent;