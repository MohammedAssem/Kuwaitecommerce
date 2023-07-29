import { Component } from '@angular/core';
import { Products } from 'src/app/class/products';
import { ProductService } from 'src/app/shared/product.service';
import { UserApiService } from 'src/app/shared/user-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  Category: any;
  filterPrice: number = 1000
  ViewInputPrice: boolean = false
  ViewInputCategory: boolean = true
  ViewInputSeller: boolean = false
  CategoriesValue: any;
  AllProdicts: any;
  ArrayRetetNum: number[] = [1, 2, 3, 4, 5, 6]
  pathImage: string = "https://kuwaitec.com/";
  sellersValue: string = "1,6,8"
  categoriesId:any
  constructor(private _userService: UserApiService,
            private _productServ: ProductService,private _Activ:ActivatedRoute) {


  }


  ngOnInit(): void {
    this.CategoriesValue=this._Activ.snapshot.paramMap.get("id")
    this._userService.filtrationProductes(this.filterPrice, this.CategoriesValue, this.sellersValue).subscribe((dataApi) => {
      console.log(dataApi)
      this.AllProdicts = dataApi.products
    })
    this._userService.getHomeData().subscribe((dataApi) => {

        this.Category = dataApi.categories
    })
  }

  ViewInputCategoryMethod() {
    this.ViewInputCategory = !this.ViewInputCategory
  }
  ViewInputPriceMethod() {
    this.ViewInputPrice = !this.ViewInputPrice
  }
  ViewInputSellerMethod() {
    this.ViewInputSeller = !this.ViewInputSeller
  }


  changevalueCategory() {
    this._userService.filtrationProductes(this.filterPrice, this.CategoriesValue, this.sellersValue).subscribe((data) => {
      console.log(data)
      this.AllProdicts = data.products
    })
    console.log(this.CategoriesValue)
  }

  pricevalueMethod() {
    this._userService.filtrationProductes(this.filterPrice, this.CategoriesValue, this.sellersValue).subscribe((data) => {
      console.log(data)
      this.AllProdicts = data.products
    })
    console.log(this.filterPrice)
  }


  AddToCart(slide: Products) {
    this._productServ.AddCart(slide)
  }
}
