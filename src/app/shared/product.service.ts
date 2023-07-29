import { Injectable } from '@angular/core';
import { Address } from '../class/address';
import { Products } from '../class/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Carts: Products[] = [];
  loclsorageProdauctOrnull: any

  constructor() { }

  token:string="";
  changeAddrss:Address={  id:  0,  name: "",  phone_number: "",  street_name: "",  area_name: "",  block: "",  additional_instructions: "",  address_type: "",  default: false}
  saveTokenInlocalStorage(token:string){
    localStorage.setItem("token",token);
  }
  getlocalStorage(){
    return localStorage.getItem("token")
  }



  AddCart(product:Products){
    this.loclsorageProdauctOrnull = localStorage.getItem("cart");

    if (this.loclsorageProdauctOrnull == null) {
      this.Carts.push(product);
      localStorage.setItem("cart", JSON.stringify(this.Carts))
    }
    else{
      this.Carts=JSON.parse(this.loclsorageProdauctOrnull)
      this.Carts.push(product);
      localStorage.setItem("cart", JSON.stringify(this.Carts))
    }
    console.log(JSON.parse( this.loclsorageProdauctOrnull))
  }



}
