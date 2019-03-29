import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ConvertNamePipe } from './convert-name.pipe';
import { ProductChildComponent } from './product-child/product-child.component';
import { ShadowBoxDirective } from './shadow-box.directive';

import { fakeBackendProvider } from './_helpers';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LeftnavComponent,
    EmployeeDetailsComponent,
    ProjectDetailsComponent,
    PageNotFoundComponent,
    EditProfileComponent,
    ConvertNamePipe,
    ProductChildComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ShadowBoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
