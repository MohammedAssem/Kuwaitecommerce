import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  quantity:number=0
  Promocode:string=""
  constructor(private _UserApi:UserApiService,private router:Router) {  }

  AddNewAddress = new FormGroup({
    name: new FormControl("", Validators.required),
    phone_number: new FormControl("", Validators.required),
    street_name: new FormControl("", Validators.required),
    area_name: new FormControl("", Validators.required),
    block: new FormControl("", Validators.required),
    additional_instructions: new FormControl("" , Validators.required),
    address_type: new FormControl("", Validators.required),
    default :new FormControl (false, Validators.required),
  })


  AddNewAddressMethod() {
    console.log(this.AddNewAddress.value)
    this._UserApi.addNewAddress(this.AddNewAddress.value).subscribe((responce)=>
    {
      console.log(responce)
      this.router.navigate(['/delivery'])
    }
    )
  }



}
