import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  countryImg:string="../../../../assets/img/kuwait (1).png";
  strcountry_code:string='+965';

  constructor(private _UserApi:UserApiService,private router:Router) {


  }
  cuntactus = new FormGroup({
    name: new FormControl("", Validators.required),
    country_code: new FormControl(""),
    phone_number: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    request_type : new FormControl(""),
    message : new FormControl("", Validators.required)
  })

  country_code(val: string,url:string) {
    this.strcountry_code = val;
    this.countryImg=url;
  }


  cuntactusMethod() {
     this.cuntactus.value.country_code=this.strcountry_code;
    console.log(this.cuntactus.value)
    this._UserApi.cuntactUs(this.cuntactus.value).subscribe((respons) => {
      this.router.navigate(['/Contactus'])

    })
  }

}
