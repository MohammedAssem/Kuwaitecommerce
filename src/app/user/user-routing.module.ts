import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './components/singup/singup.component';
import { ChangeAddressComponent } from './components/change-address/change-address.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {path:"",component:SingupComponent},
  {path:"changeAddress",component:ChangeAddressComponent},
  {path:"addAddress",component:AddAddressComponent},
  {path:"history",component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
