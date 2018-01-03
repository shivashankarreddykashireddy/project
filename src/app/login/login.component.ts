import { Http , Response } from '@angular/http';
import { MatInputModule } from '@angular/material/input';
import { LoginDetailsService } from './../service/login-details.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myData = {};
  data11 : any;
  username1 : any;
  password1: any;
  constructor(private loginservice: LoginDetailsService , private router: Router ) { 
    this.loginservice.loginData().subscribe(res => this.data11 = res, err => console.log(err));             
  }
    
datasubmit(myData) {
  console.log('data --', myData);
  console.log('username is --', myData.username);
  console.log('password is --', myData.password);
  console.log("11111111111" , this.username1);
  // console.log('this.data11 --', this.data11.username);

  if(myData.username == this.data11.username && myData.password == this.data11.password ){
      this.router.navigate(['/homepage']);
    }
    // if(myData.username == "" && myData.password == ""){      
    //   alert("Enter Data !");      
    // }
    else {
      alert("Wrong Data Entered !");
    }

  }

  ngOnInit() {    
  }
}