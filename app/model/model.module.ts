/**
 * Created by stefan.trajkovic on 9.2.2017..
 */
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule {

}