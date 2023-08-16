import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CityComponent } from './components/city/city.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { GetUserComponent } from './components/user/get-user/get-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { AddCityComponent } from './components/city/add-city/add-city.component';
import { GetCityComponent } from './components/city/get-city/get-city.component';
import { UpdateCityComponent } from './components/city/update-city/update-city.component';
import {HttpClientModule} from '@angular/common/http';
import { UserserviceService } from './services/userservice.service';
import { AgeDirective } from './directives/age.directive';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthserviceService } from './auth/authservice.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CityComponent,
    AddUserComponent,
    GetUserComponent,
    UpdateUserComponent,
    AddCityComponent,
    GetCityComponent,
    UpdateCityComponent,
    AgeDirective,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService,AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
