import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent {

  NewPassword=new FormGroup({
    password:new FormControl(null,Validators.required),
    Confirmpassword:new FormControl(null,Validators.required)
  })


  NewPasswordMethod(){
    console.log(this.NewPassword.value)
  }

}
