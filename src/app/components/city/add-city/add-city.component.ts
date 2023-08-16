import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/class/city';
import { FormControl } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit{
  city:City= new City(0,"");

    constructor(private userservice:UserserviceService,
    private router:Router){
    }
    
    ngOnInit(): void {
    
        };

      onSubmit(form: NgForm) {
          if (form.invalid) {
            return;
          }
          this.userservice.createCity(this.city).subscribe(
            (data) => {
              console.log(data);
              console.log('User registered successfully');
              form.resetForm();
              this.goToUserList();
      
            },
            (error) => {
              console.error('Error registering user:', error);
            }
          );
          }
          goToUserList(){
            this.router.navigate(['/get-city'])
          }
        }
   








    // addCity(){
    // this.userservice.createCity(this.city).subscribe((data)=>{
    // console.log('User created successfully');
   
    // this.goToUserList();
    // },
    
    // error=>console.log("Error Register User",error));
    // }
    
    // onSubmit(form:NgForm){
    //   console.log(form);
    //   this.addCity();
    // }
    
    //  goToUserList(){
    //    this.router.navigate(['/get-city'])
    //  }

