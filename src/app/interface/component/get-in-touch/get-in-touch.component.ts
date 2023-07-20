import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent {
  CuntactUs=new FormGroup({
    FirstName:new FormControl(null,Validators.required),
    LastName:new FormControl(null,Validators.required),
    PhoneNumber:new FormControl(null,Validators.required),
    Emailaddress:new FormControl(null,Validators.required),
    Comment:new FormControl(null,Validators.required),
  })


  CuntactUsMethod(){
    console.log(this.CuntactUs.value)
  }
}
