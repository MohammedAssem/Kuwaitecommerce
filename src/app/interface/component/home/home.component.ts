import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserApiService } from 'src/app/shared/user-api.service';
import { Products } from "../../../class/products"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AllData: any;
  AllProdicts:any;
  Carts: Products[] = [];
  s:any
  constructor(private _http: HttpClient, private _userService: UserApiService) {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data) => this.AllData = data)
    this._userService.getAllDate().subscribe((dataApi) =>
      console.log(dataApi.products))

      this._userService.getAllproducts().subscribe((data)=>
      {
        console.log(data.products)
        this.AllProdicts=data.products
      }
      ,(error)=>console.log(error))
 }

  AddToCart(slide: Products) {
    this.Carts.push(slide);
    localStorage.setItem("cart", JSON.stringify(this.Carts))
     this.s = localStorage.getItem("cart");
    console.log(this.s)

  }
}
