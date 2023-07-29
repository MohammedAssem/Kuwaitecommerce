import { Component } from '@angular/core';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  date: string = "3m";
  status: string="2";
  Orders: any;
  errorMassage: string = "";
  constructor(private _userApiSer: UserApiService) {

  }

  ngOnInit(): void {

  }
  addStatus() {
    this._userApiSer.getAllOrders(this.date, this.status).subscribe((responce) => {
      console.log(responce);
      if (responce.length > 0) {
        this.Orders = responce;
      }
      else {
        this.errorMassage="There are no orders at this time";
      }
    },
    (error)=>{
      console.log(error)
      this.errorMassage="There are no orders at this time";
    }
    )
  }
  adddate() {
    this._userApiSer.getAllOrders(this.date, this.status).subscribe((responce) => {
      console.log(responce);
      if (responce.length > 0) {
        this.Orders = responce;
      }
      else {
        this.errorMassage="There are no orders at this time";
      }
    },
    (error)=>{
      console.log(error)
      this.errorMassage="There are no orders at this time";
    }
    )
  }


}
