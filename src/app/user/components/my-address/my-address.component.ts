import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/class/address';
import { ProductService } from 'src/app/shared/product.service';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent {
  AllAdress:Address []=[];

  deleteForm=new FormGroup({
    id:new FormControl("")
  })

  constructor(private _UserApiService:UserApiService ,private _product: ProductService ,private _router:Router) {}

  ngOnInit(){
    this._UserApiService.getAllMyAdderss().subscribe((data)=>{
      this.AllAdress=data
    })
  }

  goToChangeAddress(objectChangeAddress:Address){
    this._product.changeAddrss=objectChangeAddress;
    this._router.navigate(["./user/changeAddress"]);
  }


  deletAddress(id:any){
    this.deleteForm.value.id=id?id:"";
    this._UserApiService.deleteAddress(this.deleteForm.value).subscribe((data)=>{
      console.log(data)
    })
  }
}
