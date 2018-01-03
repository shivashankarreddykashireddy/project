import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class LoginDetailsService {  
  data:any;
  constructor(private http:Http) { }
  loginData(){
    return this.http.get("http://localhost:5555/loginapp")
               .map((res:Response) => this.data = res.json());
    // return {
    //         "username" : "admin" ,
    //         "password" : "12345"
    //       }
  }
}
