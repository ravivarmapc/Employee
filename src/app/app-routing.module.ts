import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

const routes: Routes = [

  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: LandingComponent, canActivate: [AuthGuard] },
      {path:"employee-details", component:EmployeeDetailsComponent},
      {path:"project-details", component:ProjectDetailsComponent},
      {path:"edit-profile", component:EditProfileComponent},
    ]
},
  {path:"landing", component:LandingComponent},
  // {path:"",redirectTo:"/landing",pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
