import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(products: any[], Category: string): any[] {
    return products.filter((prod)=>prod.price);
  }

}
