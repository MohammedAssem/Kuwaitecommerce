import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environment';
import { ProductService } from './product.service';
import { Address } from '../class/address';
import { environment } from './../environments/environment';
import { Profile } from '../class/profile';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private _http: HttpClient, private _ProductService: ProductService) { }

  getHomeData(): Observable<any> {
    return this._http.get(`${environments.root}${environments.home}`)
  }

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

  filtrationProductes(maxPrice:number,categories:string,sellers:string):Observable<any>{
   return  this._http.get(`${environments.root}${environments.Products.getAllProducts}?min_price=1&categories=${categories}&sellers=${sellers},8&max_price=${maxPrice}`)
  }

  SpecificProduct(code: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Token ' + this._ProductService.token
    });
    return this._http.get(`${environments.root}${environments.Products.getAllProducts}${code}/`, { headers: headers })
  }

  reviews(bodyData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Token ' + this._ProductService.token
    });
    return this._http.post(`${environments.root}${environments.Products.AddNewReview}`, bodyData, { headers: headers })
  }

  // End Products And Review


  // start Address



  addNewAddress(bodyData: object): Observable<any> {
    // let headers = new HttpHeaders({
    //   'Authorization': 'Token ' + this._ProductService.getlocalStorage()
    // });
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    console.log(headers)
    return this._http.post(`${environments.root}${environments.Addresses.GetAllAddresses}`, bodyData, { headers: headers })
  }

  getAllMyAdderss(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.get(`${environments.root}${environments.Addresses.GetAllAddresses}`, { headers: headers })
  }

  ChangeAddress(bodydata: object): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.put(`${environments.root}${environments.Addresses.GetAllAddresses}`, bodydata, { headers: headers })

  }

  deleteAddress(bodyData: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.delete(`${environments.root}${environments.Addresses.GetAllAddresses}`, { headers: headers, body: bodyData })

  }

  // End Adress

  // start orders

  getAllOrders(date: string, status: string): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.get(`${environments.root}${environments.Orders.GetAllOrders}/?order_date=${date}&status=${status}`, { headers: headers })
  }

  detailsOrder(id: string): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.get(`${environments.root}${environments.Orders.Details}${id}`, { headers: headers })
  }

  // End orders


  // start profile

  GetProfileData():Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.get(`${environments.root}${environments.Orders.Details}`, { headers: headers })

  }


  ChangeCustomerPassword(bodydata: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.put(`${environments.root}${environments.profile.getProfileData}`, bodydata, { headers: headers })

  }

  UpdateProfileData(bodydata: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.put(`${environments.root}${environments.profile.getProfileData}`, bodydata, { headers: headers })

  }

  otp_verification(bodydata: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.get(`${environments.root}${environments.profile.GetOTPVerification}`, { headers: headers })

  }

  UpdateUserAsVerified(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this._ProductService.getlocalStorage()
    })
    return this._http.put(`${environments.root}${environments.profile.GetOTPVerification}`, { headers: headers })

  }



  cuntactUs(databody: object): Observable<any> {
    return this._http.post(`${environments.root}${environments.contact_us}`, databody)
  }


}
