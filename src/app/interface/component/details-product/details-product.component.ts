import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
  quantity:number=0;
  codeId:string="";

  AddNewReview = new FormGroup({
    code: new FormControl(""),
    title: new FormControl("", Validators.required  ),
    comment: new FormControl("", Validators.required),
    rate: new FormControl("", Validators.required)
  })

  constructor(private _UserApiService:UserApiService,private _Activ: ActivatedRoute) {
    this.AddNewReview.value.code=_Activ.snapshot.paramMap.get("id")
   }



}
