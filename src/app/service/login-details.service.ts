import { Injectable } from '@angular/core';
@Injectable()
export class LoginDetailsService {  
  data:any;
  constructor() { }
  loginData(){
    return {
            "username" : "admin" ,
            "password" : "admin"
          }
  }
}
