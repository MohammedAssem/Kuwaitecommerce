import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/shared/user-api.service';
UserApiService
@Component({
  selector: 'app-order-id',
  templateUrl: './order-id.component.html',
  styleUrls: ['./order-id.component.css']
})
export class OrderIDComponent {
  orders: any
  id: any;

  constructor(private _UserApiSer: UserApiService, private _Activ: ActivatedRoute) {
    this.id = _Activ.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {

    this._UserApiSer.detailsOrder(this.id).subscribe((data) => {
      this.orders = data;
    })
  }
}
