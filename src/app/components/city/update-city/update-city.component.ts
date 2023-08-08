import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/class/city';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {
  id!:Number;
  //city:City= new City();
  city:City= new City(0,"");
  constructor(
  private router:ActivatedRoute,
  private userService:UserserviceService,
  private routes:Router){

 }  
  //  ngOnInit(): void {
  //     this.userService.getEmployeeById()
  //  } 
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.userService.getCityById(this.id).subscribe(data=>{
    this.city=data;
  }
    ,error=>console.log(error));
 
  } 


   updateCity(){
    this.userService.updateCity(this.id,this.city).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error=>console.log(error));
  }
   onSubmit(form:NgForm){
   // console.log(form);
    this.updateCity();
  }
     goToUserList(){
     this.routes.navigate(['/get-city'])
   }

}

