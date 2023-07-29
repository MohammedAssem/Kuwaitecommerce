
import { Products } from './products';

export interface Order {
    id:number ,
    status:string,
    date: Date,
    products: Products[]
   }
