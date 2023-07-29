import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(products: any[], price: number): any[] {

    if (products ==undefined) {
      return products;
    }
    else {
      return products.map((prod) => prod.price >= price);
    }
  }

}
