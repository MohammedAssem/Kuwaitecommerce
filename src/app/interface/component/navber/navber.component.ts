import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService ,} from 'src/app/shared/product.service';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent {

  constructor(private _userApi: UserApiService,private _ProductService:ProductService) {

  }

  forgetPassword = new FormGroup({
    phone: new FormControl(""),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })
  signIn = new FormGroup({
    phone: new FormControl("", Validators.required,),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  complete_register = new FormGroup({
    first_name: new FormControl("", Validators.required,),
    last_name: new FormControl("",Validators.required)
  })


  signUp=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    country_code:new FormControl("+20"),
    phone_number:new FormControl(null,[Validators.required,Validators.maxLength(20)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),

  })

  MassageErrorPassword:string="";
  DivForgetPassword: boolean = false;
  ForgetPassword: boolean = false;
  RegstrainAndLogin: boolean = false;
  displayStyle: string = "";
  displayStyleBtn: string = "";
  textlogin: string = "Login in or register";
  password: string = "password";
  boolChangTypPassword: boolean = false;
  emailAndname: boolean = false
  emailAndPassword: boolean = false
  emailAndcode: boolean = false
  Divlogin: boolean = true;

  Otbcode:string="";
  Useremail:string="";
  UserCode:string="";

  emailForgetPassword:string="";

  ngOnChanges(): void {

  }
  viewdisplayPassword() {
    this.textlogin = "Login";
    this.displayStyle = "inline";
    this.displayStyleBtn = "none";
  }

  ChangTypPassword() {
    if (this.boolChangTypPassword == false) {
      this.password = "password";
      this.boolChangTypPassword = true
    }
    else {
      this.password = "text";
      this.boolChangTypPassword = false
    }
  }

  trueLogin() {
    this.Divlogin = false;
    this.emailAndPassword = true;
    this.textlogin = "Create an account"
  }
  trueRegstraion() {
    this.emailAndPassword = false;
    this.ForgetPassword = false;
    this.Divlogin = true;
    this.textlogin = "Login"
  }
  backemailAndPassword() {
    this.emailAndcode = false;
    this.emailAndPassword = true;
  }

  backemailAndCode() {
    this.emailAndname = false;
    this.emailAndcode = true;

  }
  ViewRegstrainAndLogin() {
    if (this.RegstrainAndLogin == true) {
      this.RegstrainAndLogin = false;
    } else {
      this.RegstrainAndLogin = true
    }

  }

  viewForgetPassword() {
    this.Divlogin = false;
    this.ForgetPassword = true;
    this.DivForgetPassword = true;
  }
  backForgetpassword() {
    this.ForgetPassword = true;
    this.DivForgetPassword = true;
  }

  signInMethod() {
    this.MassageErrorPassword="";
    console.log(this.signIn.value)
    this._userApi.login(this.signIn.value.phone ? this.signIn.value.phone : "",
     this.signIn.value.password ? this.signIn.value.password : "").subscribe((respons)=>{
      if(respons.token!=null){
       this._ProductService.token=respons.token;
       this._ProductService.saveTokenInlocalStorage(respons.token);
      }
      else
      {
        alert("respons.token")
      }

     },
      (error)=>{
        console.log(error.status)
        if(error.status==401)
        {
          this.MassageErrorPassword="this Email or password is Not Valid"
        }
      }
     )
  }

  SignUpMethod(){
    this._userApi.register(this.signUp.value).subscribe((respons)=>{
      console.log(respons)
      if(respons.token !=null){
        this.Useremail =this.signUp.value.email?this.signUp.value.email:"";
        this.emailAndPassword=false;
        this._ProductService.token=respons.token;
        this.Otbcode=respons.otp_code;
        this.emailAndcode=true;
      }
    })
  }
  SignUp_Code_Method(){
    if (this.UserCode==this.Otbcode){
      this.emailAndcode=false;
      this.emailAndname=true;
    }
  }

country_code(val:string){
  this.signUp.value.country_code=val
}

complete_registerMethod(){
  this._userApi.complete_register(this.complete_register.value).subscribe((responce)=>{
    this._ProductService.token=responce;
    this.RegstrainAndLogin=false
    if(responce.token !=null){
      this.Useremail =this.signUp.value.email?this.signUp.value.email:"";
      this.emailAndPassword=false;
      this._ProductService.token=responce.token;
      this.emailAndcode=true;
    } ;
  })
}

EmailForGetPassword(){
  this._userApi.forgot_password(this.emailForgetPassword).subscribe((respons)=>{
    if(respons.error!=706){
      this.Otbcode=respons;
      this.UserCode="";
      this.DivForgetPassword=false
      this.DivForgetPassword=true;
    }
  })
}



ChangePasswordMethod(){
this._userApi.complete_forgot_password(this.forgetPassword.value).subscribe((response)=>{
  if (response.error!=706){
    this._ProductService.token=response
    this.RegstrainAndLogin=false;
    this.Divlogin=true;
    this.DivForgetPassword=false;
  }
})
}
}
