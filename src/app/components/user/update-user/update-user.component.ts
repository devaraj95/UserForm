import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { User } from 'src/app/class/user';
import { City } from 'src/app/class/city';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  id!:Number;
  //user:User= new User();
  user: User = new User(0, '', '',null,false, new City(0, ''));
  cities: City[] = [];

  //city:City[]=[];
  constructor(
  private router:ActivatedRoute,
  private userService:UserserviceService,
  private routes:Router){

 }  
ngOnInit(): void {
  this.id=this.router.snapshot.params['id'];
  this.userService.getUserById(this.id).subscribe(data=>{
  this.user=data;}
  ,error=>console.log(error));
  this.getAllCity();
 } 

 getAllCity(){
  this.userService.getAllCity().subscribe((cities) => {
    this.cities = cities;
  });
 }
 updateUser(){
  this.userService.updateUser(this.id,this.user).subscribe(
    () => {
      console.log('User registered successfully');
      //form.resetForm();
    },
    (error) => {
      console.error('Error registering user:', error);
    }
   );
   this.goToUserList();
 }

onSubmit(form: NgForm) {
  // if (form.invalid) {
  //   return;
  // }
  this.updateUser();

}

  goToUserList(){
    this.routes.navigate(['/get-user'])
  }





}













//   //  ngOnInit(): void {
//   //     this.userService.getEmployeeById()
//   //  } 
//   ngOnInit(): void {
//     this.id=this.router.snapshot.params['id'];

//     this.userService.getEmployeeById(this.id).subscribe(data=>{
//     this.user=data;}
//     ,error=>console.log(error));

//   } 
//   // getUser(){
//   //   this.userService.getCityById().subscribe(data=>{
//   //     this.user=data;
//   //   });
//   // }

//    updateUser(){
//     this.userService.updateUser(this.id,this.user).subscribe(data=>{
//       console.log(data);
//       this.goToUserList();
//     },
//     error=>console.log(error));
//   }
//    onSubmit(form:NgForm){
//     console.log(form);
//     this.updateUser();
//   }
//      goToUserList(){
//      this.routes.navigate(['/get-user'])
//    }

// }

