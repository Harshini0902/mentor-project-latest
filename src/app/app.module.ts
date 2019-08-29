import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SearchFormComponent } from './search-form/search-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

    

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
   SearchFormComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    MentorSignupComponent,
    MentorLoginComponent,
    TrainerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
