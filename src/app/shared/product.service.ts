import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  token:string="";

  saveTokenInlocalStorage(token:string){
    localStorage.setItem("token",token);
  }
  getlocalStorage(){
    return localStorage.getItem("token")
  }
}
