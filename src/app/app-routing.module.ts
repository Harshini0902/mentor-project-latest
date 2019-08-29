import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';



const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'mentor-signup',component:MentorSignupComponent},
    {path:'mentor-login',component:MentorLoginComponent},
    {path:'trainer-details',component:TrainerDetailsComponent},
    {path:'trainers/:techName',component:TrainerDetailsComponent},
    { path: '',redirectTo:'',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
