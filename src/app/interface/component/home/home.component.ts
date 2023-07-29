import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserApiService } from 'src/app/shared/user-api.service';
import { Products } from "../../../class/products"
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AllData: any;
  AllProdicts: any;
  categories: any;
  recent_products: any;
  slider: any
  ArrayRetetNum: number[] = [1, 2, 3, 4, 5, 6]
  indexViewProducts: number = 20;
  lengthArrayProducts: number = 0;
  ArrayNextNum: number[] = []
  nextIndex: number = 4;
  privIndex: number = 0;
  pathImage: string = "https://kuwaitec.com/";

  constructor(private _http: HttpClient, private _userService: UserApiService, private _productServ: ProductService) {
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
    this._userService.getHomeData().subscribe((dataApi) => {
      this.AllProdicts = dataApi.products
      this.categories = dataApi.categories;
      this.recent_products = dataApi.recent_products;
      this.slider = dataApi.slider;
      console.log(this.AllProdicts)
      this.lengthArrayProducts = (dataApi.products.length / 20);
      for (let index = 1; index <= this.lengthArrayProducts; index++) {
        this.ArrayNextNum.push(index)
      }
      console.log(dataApi)
    }
      , (error) => console.log(error))
  }
  AddToCart(slide: Products) {
    this._productServ.AddCart(slide)
  }


  addviewProducts(index: number) {
    this.indexViewProducts = index * 20
  }


  NextIndexMethod() {
    if (this.lengthArrayProducts > this.nextIndex) {
      this.nextIndex += 1;
      this.privIndex += 1
      console.log(this.nextIndex)
    }
  }

  PrivIndexMethod() {
    if (this.privIndex > 0 && this.lengthArrayProducts > this.nextIndex) {
      this.nextIndex -= 1;
      this.privIndex -= 1
    }
  }
}
