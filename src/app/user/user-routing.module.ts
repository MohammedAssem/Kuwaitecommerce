import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeAddressComponent } from './components/change-address/change-address.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { HistoryComponent } from './components/history/history.component';
import { MyAddressComponent } from './components/my-address/my-address.component';
import { OrderIDComponent } from './components/order-id/order-id.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FotgetPasswordComponent } from './components/fotget-password/fotget-password.component';

const routes: Routes = [
  {path:"changeAddress",component:ChangeAddressComponent},
  {path:"addAddress",component:AddAddressComponent},
  {path:"history",component:HistoryComponent},
  {path:"MyAdderss",component:MyAddressComponent},
  {path:"changePassword",component:FotgetPasswordComponent},
  {path:"orderId/:id",component:OrderIDComponent},
  {path:"profile",component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
