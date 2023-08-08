import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/class/city';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-get-city',
  templateUrl: './get-city.component.html',
  styleUrls: ['./get-city.component.css']
})
export class GetCityComponent implements OnInit{

  city:City[]=[];
  constructor(private http:HttpClient,
    private router:Router,
    private userService:UserserviceService){
  }  
    ngOnInit(): void {
     this.getCity();
   }
   getCity(){
    this.userService.getAllCity().subscribe((data:any)=>{
    this.city=data
    });
   }
  updateCity(id:Number){
    this.router.navigate(['update-city',id]);
  }

   addCity(){
    this.router.navigate(['add-city'])
   }

   deleteCity(id:Number){
    this.userService.deleteCity(id).subscribe(data=>{
    console.log(data);
   // this.router.navigate(['get-user'])
   // window.location.reload();
     this.getCity();
   });
}



}
