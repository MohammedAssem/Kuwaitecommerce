import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environment';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private _http: HttpClient, private _ProductService: ProductService) { }

  getAllDate(): Observable<any> {
    return this._http.get("https://dummyjson.com/products");
  }

  // start Registeration & Login
  login(emailOrPhone: string, password: string): Observable<any> {
    console.log(emailOrPhone, password)
    return this._http.get(`${environments.root}${environments.User.login}?email_or_phone=${emailOrPhone}&password=${password}`);
  }

  register(bodyData: any): Observable<any> {
    console.log(bodyData)
    return this._http.post(`${environments.root}${environments.User.Register}`, bodyData);
  }

  complete_register(bodyData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Token ' + this._ProductService.token
    });
    return this._http.put(`${environments.root}${environments.User.Complete_Register}`, bodyData, { headers: headers });
  }

  forgot_password(emailOrPhone: string): Observable<any> {
    return this._http.get(`${environments.root}${environments.User.Forgot_password}?email_or_phone=${emailOrPhone}`);
  }

  complete_forgot_password(bodyData: any): Observable<any> {
    return this._http.put(`${environments.root}${environments.User.Forgot_password}`, bodyData);
  }

  // End Registeration & Login




  // start  Products And Review


  getAllproducts(): Observable<any> {
    return this._http.get(`${environments.root}${environments.Products.getAllProducts}`)
  }

  SpecificProduct(id: number): Observable<any> {
    return this._http.get(`${environments.root}${environments.Products.getAllProducts}${id}/`)
  }

  reviews(bodyData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Token ' + this._ProductService.token
    });
    return this._http.post(`${environments.root}${environments.Products.AddNewReview}`, bodyData, { headers: headers })
  }

  // End Products And Review


// start Address



addNewAddress(bodyData:object):Observable<any>{
  // let headers = new HttpHeaders({
  //   'Authorization': 'Token ' + this._ProductService.getlocalStorage()
  // });
 var headers=new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Token ' + this._ProductService.getlocalStorage()
  })
  console.log(headers)
  return this._http.post(`${environments.root}${environments.Addresses.GetAllAddresses}`,bodyData,{ headers: headers })
}



}
