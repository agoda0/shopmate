import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AboutComponent } from './shared/components/about/about.component';

const routes: Routes = [
  { path:'products' ,component:AllProductsComponent},
  { path:'details/:id', component:ProductDetailsComponent},
  { path:'carts' ,component:CartComponent},
  { path: 'about', component:AboutComponent },
  { path:'**', redirectTo:"products",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
