import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesComponent } from './interface/component/categories/categories.component';
import { HomeComponent } from './interface/component/home/home.component';
import { DetailsProductComponent } from './interface/component/details-product/details-product.component';
import { DeliveryComponent } from './interface/component/delivery/delivery.component';
import { OualityControlComponent } from './interface/component/ouality-control/ouality-control.component';
import { ContactusComponent } from './interface/component/contactus/contactus.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"details/:code",component:DetailsProductComponent},
  {path:"delivery",component:DeliveryComponent},
  {path:"quality",component:OualityControlComponent},
  {path:"categories/:id",component:CategoriesComponent},
  {path:"Contactus",component:ContactusComponent},
  {path:"user", loadChildren:()=>import('./user/user.module').then((x)=>x.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
