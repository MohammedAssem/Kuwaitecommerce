import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  signIn=new FormGroup({
    phone:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })


  signInMethod(){
    console.log(this.signIn.value)
  }

}
