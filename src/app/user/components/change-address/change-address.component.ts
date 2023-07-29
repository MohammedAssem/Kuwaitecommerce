import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/shared/user-api.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Address } from 'src/app/class/address';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.css']
})
export class ChangeAddressComponent {

  changeAddrss:Address={  id:  0,  name: "",  phone_number: "",  street_name: "",  area_name: "",  block: "",  additional_instructions: "",  address_type: "",  default: false}

  constructor(private _UserApi: UserApiService, private router: Router,
              private _Activat:ActivatedRoute,private _ProductService: ProductService) { }


  ChangeAddress = new FormGroup({
    id:new FormControl(0),
    name: new FormControl("", Validators.required),
    phone_number: new FormControl("", Validators.required),
    street_name: new FormControl("", Validators.required),
    area_name: new FormControl("", Validators.required),
    block: new FormControl("", Validators.required),
    additional_instructions: new FormControl("", Validators.required),
    address_type: new FormControl("", Validators.required),
    default: new FormControl("", Validators.required),
  })

  ngOnInit(): void {
    this.changeAddrss= this._ProductService.changeAddrss
  }

  ChangeAddressMethod() {
    console.log(this.ChangeAddress.value)
    this._UserApi.ChangeAddress(this.ChangeAddress.value).subscribe((responce) => {
      console.log(responce)
      this.router.navigate(['user/MyAdderss'])
    })
  }
}
