import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ConvertNamePipe } from './convert-name.pipe';
import { ProductChildComponent } from './product-child/product-child.component';
import { ShadowBoxDirective } from './shadow-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    LeftnavComponent,
    EmployeeDetailsComponent,
    ProjectDetailsComponent,
    PageNotFoundComponent,
    EditProfileComponent,
    ConvertNamePipe,
    ProductChildComponent,
    ShadowBoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
