import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor(
    private router:Router
  ) { }

  isLogin(){

    if( localStorage.getItem("Token") == null || localStorage.getItem("UserData") == null)
      return false;
    else
      return true
  }

  logOut(){

    this.router.navigateByUrl("/auth/login");
  }

  getToken(){

    return localStorage.getItem("Token");
  }


  getTokenExpiredDate(){

    return this.helper.getTokenExpirationDate(this.getToken())
  }

  isTokenExpired(){

    return this.helper.isTokenExpired(this.getToken())
  }
}
