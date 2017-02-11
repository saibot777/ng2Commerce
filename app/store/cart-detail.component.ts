/**
 * Created by stefan.trajkovic on 9.2.2017..
 */
import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    moduleId: module.id,
    templateUrl:"cart-detail.component.html"
})
export class CartDetailComponent {
    constructor(public cart: Cart) { }
}