/**
 * Created by stefan.trajkovic on 9.2.2017..
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cart-summary.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        StoreComponent,
        CounterDirective, 
        CartSummaryComponent
    ],
    exports: [StoreComponent]
})
export class StoreModule { }