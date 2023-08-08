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
    UpdateCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
