import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';

const routes: Routes = [
  {path:"home" , component:ShopHomeComponent},
  {path:"cart" , component:CartComponent,},
  {path:"place-order", component:PlaceOrderComponent},
  {path:"" , redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
