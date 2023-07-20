import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  signUp=new FormGroup({
    firstName:new FormControl(null,Validators.required),
    LastName:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    phone:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    otp:new FormControl(false ),
    AgreeTerms:new FormControl(false ),
  })


  SignUpMethod(){
    console.log(this.signUp.value)
  }

}
