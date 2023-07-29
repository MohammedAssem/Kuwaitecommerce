// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false

};
export const environments = {
  root: "https://kuwaitec.com/api/ecommerce/",
  home: "home/",
  contact_us:"contact_us/",
  error_log:"error_log/" ,
   User: {
    login: "login/",
    Register: "register/",
    Complete_Register: "complete_register/",
    Forgot_password: "forgot_password/",
  },
  Products: {
    getAllProducts: "products/",
    AddNewReview: "reviews/",
  },
  Addresses: {
    GetAllAddresses: "addresses/",
  },
  Orders: {
    GetAllOrders: "/orders",
    Details: "order_details/"
  },
  profile: {
    getProfileData: "profile/",
    ChangeCustomerPassword: "change_password/",
    GetOTPVerification: "otp_verification",
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
