import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  quantity:number=0

  /**
   *
   */
  constructor(private _UserApi:UserApiService) {
  }

  AddNewAddress = new FormGroup({
    name: new FormControl("", Validators.required),
    phone_number: new FormControl("", Validators.required),
    street_name: new FormControl("", Validators.required),
    area_name: new FormControl("", Validators.required),
    block: new FormControl(""),
    additional_instructions: new FormControl("" ),
    address_type: new FormControl(""),
    default :new FormControl (false),
  })


  AddNewAddressMethod() {
    console.log(this.AddNewAddress.value)
    this._UserApi.addNewAddress(this.AddNewAddress.value).subscribe((responce)=>
    {
      console.log(responce)
    }
    )
  }
}
