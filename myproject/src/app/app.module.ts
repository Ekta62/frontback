import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

//import dashboard routing module
import { DashboardRoutingModule} from './dashboard/dashboard-routing.module';


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ProductComponent } from './dashboard/product/product.component';
import { UploadimageComponent } from './dashboard/uploadimage/uploadimage.component';

// import ng2-file-upload module

import { FileUploadModule } from 'ng2-file-upload';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    ProfileComponent,
    ProductComponent,
    UploadimageComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }