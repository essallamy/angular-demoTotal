import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {firstValueFrom} from "rxjs";
import {AppStateService} from "./app-state.service";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,
              private  appState: AppStateService) { }

  async login(username : string,password:string){
    //convertir observal en promise
  let user:any= await firstValueFrom(this.http.get("http://localhost:8088/user/"+username));// jattend lorsque recupere la reponse
if(password==user.password){
  let decodedJWT:any=jwtDecode(user.token);
  this.appState.serAuthState({
    isAuthenticated:true,
    username:decodedJWT.sub,
    roles:decodedJWT.roles,
    token : user.token
  });
  return Promise.resolve(true);
}else{
  return  Promise.reject("Bad credentials");
}
  }
}
