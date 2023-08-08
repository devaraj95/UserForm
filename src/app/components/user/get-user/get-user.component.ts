import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { City } from 'src/app/class/city';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  city!:City[];
 //city:City=new City();
  user!:User[];
   
 //city:City=new City();
  //user!:User[];
  private baseURL="http://localhost:8080";

  constructor(private http:HttpClient,
    private router:Router,
    private userService:UserserviceService){
  }  
    ngOnInit(): void {
      this.getUser();
      this.getCity();
   }
    getUser(){
      this.userService.getUsers().subscribe(data=>{
        this.user=data;
      });
    }

   updateUser(id:Number){
    this.router.navigate(['update-user',id]);
   }

   addUser(){
    this.router.navigate(['add-user'])
   }

   deleteUser(id:Number){
    this.userService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
   // this.router.navigate(['get-user'])
   // window.location.reload();
     this.getUser();
   });
  }
  getCity(){
    this.userService.getAllCity().subscribe((data:any)=>{
    this.city=data.city;
    });
  }


}
