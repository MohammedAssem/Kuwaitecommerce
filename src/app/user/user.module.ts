import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FotgetPasswordComponent } from './components/fotget-password/fotget-password.component';
import { MyAddressComponent } from './components/my-address/my-address.component';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';

import { ProfileComponent } from './components/profile/profile.component';
import { OrderIDComponent } from './components/order-id/order-id.component';
import { HistoryComponent } from './components/history/history.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { ChangeAddressComponent } from './components/change-address/change-address.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DoneComponent } from './components/done/done.component';
import { DoneChangeAddressComponent } from './components/done-change-address/done-change-address.component'
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FotgetPasswordComponent,
    MyAddressComponent,
    CreateNewPasswordComponent,
    ProfileComponent,
    OrderIDComponent,
    HistoryComponent,
    AddAddressComponent,
    ChangeAddressComponent,
    DoneComponent,
    DoneChangeAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,FormsModule,
    ReactiveFormsModule, MatIconModule
  ]
})
export class UserModule { }
