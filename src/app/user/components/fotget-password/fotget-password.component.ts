import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/shared/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotget-password',
  templateUrl: './fotget-password.component.html',
  styleUrls: ['./fotget-password.component.css']
})
export class FotgetPasswordComponent {

  ChangePassword=new FormGroup({
    old_password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    new_password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })

  errorMssage:string="";
  constructor(private _userApiServ:UserApiService ,private _router:Router)   {


  }


  ChangePasswordMethod(){   console.log(this.ChangePassword.value)
    this._userApiServ.ChangeCustomerPassword(this.ChangePassword.value).subscribe((data)=>{
      if(data.old_password!=null)
      {
        this._router.navigate(['/user/profile'])
      }
      else{
        this.errorMssage="this password is not valid";
      }
    })

  }

}
