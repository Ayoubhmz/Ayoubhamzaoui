import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {OffresEmploiComponentComponent} from "./offres-emploi-component/offres-emploi-component.component";
import {ArticlesComponentComponent} from "./articles-component/articles-component.component";

import {NotfoundComponent} from "./notfound/notfound.component";
import {DetailprodComponent} from "./detailprod/detailprod.component";

const routes: Routes = [
  {path:'',redirectTo:'Product',pathMatch:"full"},
  {path:'Product', component:ProductComponent},
  {path:'Offre', component:OffresEmploiComponentComponent},
  {path:'Article', component:ArticlesComponentComponent},
  {path:'detail/:id', component:DetailprodComponent},

  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
