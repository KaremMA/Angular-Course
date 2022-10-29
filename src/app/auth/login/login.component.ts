import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/@Services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private login:LoginService,
    private router:Router
  ) { }

  ViewPassword = false;

  LogInObject = {

    Username: "",
    Password: ""
  }

  ErrorMessage = "";
  Error = false;

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.LogInObject);

    if(this.LogInObject.Username == "" || this.LogInObject.Password == "" ){
      
      this.ErrorMessage = "الرجاء تعبئة جميع الحقول";
      this.Error = true;
      return;
    }
    
    this.login.LogInToSystem(this.LogInObject)
    .subscribe({
      next: (res) => {

        if(res.StatusCode == 200){

          localStorage.setItem("UserData", JSON.stringify(res.JsonObject));
          localStorage.setItem("Token", res.JsonObject.AccessToken)
          this.router.navigateByUrl("/home");
        }else{

          this.ErrorMessage = res.Message;
          this.Error = true;
        

        }
        console.log(res);
        
      }
    })
  }

}
