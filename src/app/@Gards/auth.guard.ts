import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../@Services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private auth:AuthService
  ){}

  canActivate(){
    
    if(this.auth.isLogin() && !this.auth.isTokenExpired()) return true;

    this.auth.logOut();
    return false;
  }
  
}
