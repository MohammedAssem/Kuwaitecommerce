import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService, } from 'src/app/shared/product.service';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent {

  MassageErrorPassword: string = "";
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
  countryImg:string="../../../../assets/img/kuwait (1).png";
  Otbcode: string = "";
  Useremail: string = "";
  UserCode: string = "";
  strcountry_code:string='+965';
  emailForgetPassword: string = "";
  loclstorageToken: any;
  Catogres:any;
  constructor(private _userApi: UserApiService, private _ProductService: ProductService) {}


  ngOnInit(): void {
    this._userApi.getHomeData().subscribe((data)=>{
      this.Catogres=data.categories
    })
    this.loclstorageToken = this._ProductService.getlocalStorage()
    if (this.loclstorageToken == null) {
      this.RegstrainAndLogin = true;
    }
  }

  forgetPassword = new FormGroup({
    email_or_phone: new FormControl(""),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  signIn = new FormGroup({
    phone: new FormControl("", Validators.required,),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  complete_register = new FormGroup({
    first_name: new FormControl("", Validators.required,),
    last_name: new FormControl("", Validators.required)
  })


  signUp = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    country_code: new FormControl(""),
    phone_number: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),

  })


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
    this.MassageErrorPassword = "";
    console.log(this.signIn.value)
    this._userApi.login(this.signIn.value.phone ? this.signIn.value.phone : "",
      this.signIn.value.password ? this.signIn.value.password : "").subscribe((respons) => {
        if (respons.token != null) {
          this._ProductService.token = respons.token;
          this._ProductService.saveTokenInlocalStorage(respons.token);
        }
        else {
          alert("respons.token")
        }

      },
        (error) => {
          console.log(error.status)
          if (error.status == 401) {
            this.MassageErrorPassword = "this Email or password is Not Valid"
          }
        }
      )
  }

  SignUpMethod() {
    this.signUp.value.country_code=this.strcountry_code
    this._userApi.register(this.signUp.value).subscribe((respons) => {
      console.log(respons)
      if (respons.token != null) {
        this.Useremail = this.signUp.value.email ? this.signUp.value.email : "";
        this.emailAndPassword = false;
        this._ProductService.token = respons.token;
        this.Otbcode = respons.otp_code;
        this.emailAndcode = true;
      }
    })
  }
  SignUp_Code_Method() {
    console.log(this.UserCode)
    console.log(this.Otbcode)
    if (this.UserCode == this.Otbcode) {
      this.emailAndcode = false;
      this.emailAndname = true;
    }
    else{

    }
  }

  country_code(val: string,url:string) {
    this.strcountry_code = val;
    this.countryImg=url;
  }


  returnOtpCode(){
    this._userApi.forgot_password(this.Useremail).subscribe((respons) => {
      if (respons.otp_number != '') {
        this.Otbcode = respons.otp_number;
      }
    })
  }

  complete_registerMethod() {
    this._userApi.complete_register(this.complete_register.value).subscribe((responce) => {
      this._ProductService.token = responce;
      this.RegstrainAndLogin = false
      if (responce.token != null) {
        this.Useremail = this.signUp.value.email ? this.signUp.value.email : "";
        this.emailAndPassword = false;
        this._ProductService.token = responce.token;
        this.emailAndcode = true;
      };
    })
  }

  EmailForGetPasswordMetode() {
    console.log(this.emailForgetPassword)
    this._userApi.forgot_password(this.emailForgetPassword).subscribe((respons) => {
      console.log(respons)
      if (respons.otp_number != '') {
        this.Otbcode = respons.otp_number;
        console.log(this.Otbcode)

        this.UserCode = "";
        this.DivForgetPassword = false;
      }
    })
  }

  ChangePasswordMethod() {
    if (this.Otbcode === this.UserCode) {
      this.forgetPassword.value.email_or_phone = this.emailForgetPassword;
      console.log(this.forgetPassword.value)
      this._userApi.complete_forgot_password(this.forgetPassword.value).subscribe((response) => {
       console.log(response)
        if (response.otp_token != '') {
          this._ProductService.token = response
          this.RegstrainAndLogin = false;
          this.Divlogin = true;
          this.DivForgetPassword = false;
        }
      })
    }

  }


}
