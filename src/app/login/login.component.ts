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
  constructor(private loginservice: LoginDetailsService , private router: Router ) { 
    this.loginservice.loginData().subscribe(res => this.data11 = res, err => console.log(err));             
  }
    
datasubmit(myData) {
  console.log('data --', myData);
  console.log('username is --', myData.username);
  console.log('password is --', myData.password);
  
  if(myData.username == this.data11[0].username && myData.password == this.data11[0].password ){
      this.router.navigate(['/homepage']);
    }
    else {
      alert("Wrong Data Entered !");
    }

  }

  ngOnInit() {    
  }
}