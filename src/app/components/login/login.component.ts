import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(data){
    this.authenticationService.login(data)
      .subscribe(resp=>{
        let jwtBearer=resp.headers.get("Authorization");
        let jwt=jwtBearer.split(" ")[1]
        this.authenticationService.saveToken(jwt);
        this.router.navigateByUrl("/")
      },err=>{
        console.log(err)
      })

  }
  isAdmin(){
    return this.authenticationService.isAdmin()
  }
  isUser(){
    return this.authenticationService.isUser()
  }
  isAuthenticated(){
    return this.authenticationService.isAuthenticated()
  }

}
