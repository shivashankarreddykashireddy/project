import { MatInputModule } from '@angular/material/input';
import { LoginDetailsService } from './../service/login-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myData = {};
  data : any;
  constructor(private loginservice: LoginDetailsService , private router: Router ) { 
    // console.log("Hiiiiiiiiiiiiiiiiiiii");
    this.data = this.loginservice.loginData();     
  }
  datasubmit(myData) {
    console.log('data --', myData);
    console.log('username is --', myData.username);
    console.log('password is --', myData.password);
  
    if(this.data.username == myData.username && this.data.password == myData.password){
      this.router.navigate(['/homepage']);
    }
    else{      
      alert("Wrong Data Entered !");
    }
    
  }

  ngOnInit() {    
  }
}