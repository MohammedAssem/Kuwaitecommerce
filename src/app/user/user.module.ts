import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { FotgetPasswordComponent } from './components/fotget-password/fotget-password.component';
import { MyAddressComponent } from './components/my-address/my-address.component';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';
import { OtpComponent } from './components/otp/otp.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderIDComponent } from './components/order-id/order-id.component';
import { HistoryComponent } from './components/history/history.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { ChangeAddressComponent } from './components/change-address/change-address.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DoneComponent } from './components/done/done.component'

@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    FotgetPasswordComponent,
    MyAddressComponent,
    CreateNewPasswordComponent,
    OtpComponent,
    ProfileComponent,
    OrderIDComponent,
    HistoryComponent,
    AddAddressComponent,
    ChangeAddressComponent,
    DoneComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
