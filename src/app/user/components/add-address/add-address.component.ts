import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {


  AddNewAddress = new FormGroup({
    Name: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    StreetNumber: new FormControl(null, Validators.required),
    AreaNumber: new FormControl(null, Validators.required),
    BlockNumber: new FormControl(null),
    VillaHouseNumber: new FormControl(null, Validators.required),
    AddressType: new FormControl(null),
    defaultAddresse : new FormControl(false),
  })


  AddNewAddressMethod() {
    console.log(this.AddNewAddress.value)
  }
}
