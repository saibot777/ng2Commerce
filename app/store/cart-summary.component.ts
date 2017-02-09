/**
 * Created by stefan.trajkovic on 9.2.2017..
 */
import { Component } from "@angular/core"; 
import { Cart } from "../model/cart.model";

@Component({
    selector: "cart-summary",
    moduleId: module.id,
    templateUrl: 'cart-summary.component.html'
})
export class CartSummaryComponent {
    constructor(public cart: Cart) {
        
    }
}