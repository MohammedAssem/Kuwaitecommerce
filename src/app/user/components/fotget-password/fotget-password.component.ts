import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fotget-password',
  templateUrl: './fotget-password.component.html',
  styleUrls: ['./fotget-password.component.css']
})
export class FotgetPasswordComponent {

  signIn=new FormGroup({
    phoneOrEmail:new FormControl(null,Validators.required),
  })


  signInMethod(){
    console.log(this.signIn.value)
  }

}
