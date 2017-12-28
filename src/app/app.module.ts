import { LoginDetailsService } from './service/login-details.service';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,    
    RouterModule.forRoot([
      { path: "loginpage" , component: LoginComponent },
      { path: "homepage" ,component: HomepageComponent },
      { path: "" , redirectTo: "/loginpage" , pathMatch:"full" },
      { path: "**" , redirectTo: "/loginpage" , pathMatch:"full" },
    ])
  ],
  providers: [LoginDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
