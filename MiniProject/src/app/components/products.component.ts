import { Component, Input } from "@angular/core";

@Component({
    selector:"products",
    templateUrl:"./products.component.html"
})

class ProductsComponent{
    @Input() products:any;
}

export default ProductsComponent;