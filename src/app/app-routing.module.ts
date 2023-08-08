import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { GetUserComponent } from './components/user/get-user/get-user.component';
import { GetCityComponent } from './components/city/get-city/get-city.component';
import { AddCityComponent } from './components/city/add-city/add-city.component';
import { UpdateCityComponent } from './components/city/update-city/update-city.component';

const routes: Routes = [
  {path:'add-user',component:AddUserComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'',redirectTo:'get-user',pathMatch:'full'},
  {path:'get-user',component:GetUserComponent},
  {path:'add-city',component:AddCityComponent},
  {path:'update-city/:id',component:UpdateCityComponent},
  {path:'',redirectTo:'get-city',pathMatch:'full'},
  {path:'get-city',component:GetCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
