import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/class/profile';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  UpdateProfile = new FormGroup({
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
  })

  dataUserProfile: any

  constructor(private _userApiSer: UserApiService) {
    this._userApiSer.GetProfileData().subscribe((data) => {

      this.dataUserProfile = data;
    })
  }

  ngOnInit(): void {



  }

  UpdateProfileMethod() {
    this._userApiSer.UpdateProfileData(this.UpdateProfile.value).subscribe((date) => {

    })
  }


}
