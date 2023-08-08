import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormBuilder, FormGroup, FormsModule, Validators,FormControl, NgForm } from '@angular/forms';
import { User } from 'src/app/class/user';
import { City } from 'src/app/class/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  user: User = new User(0, '', '', new City(0, ''));
  cities: City[] = [];

  constructor(
    private userService: UserserviceService,
  
  ) {}

  ngOnInit() {
    this.userService.getAllCity().subscribe((cities) => {
      this.cities = cities;
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.userService.createUser(this.user).subscribe(
      (data) => {
        console.log(data);
        console.log('User registered successfully');
        form.resetForm();

      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }





















//   city!:City[];
// user:User= new User(

// );

// constructor(private userservice:UserserviceService,
// private router:Router){
// }
// ngOnInit(): void {
//   this.getCity();
// }
// getCity(){
//  this.userservice.getAllCity().subscribe((data:any)=>{
//  this.city=data.city;
//  });
// }
 
// addUser(){
// this.userservice.createUser(this.user).subscribe((data)=>{
// console.log('User created successfully');
// this.user=data;
// this.getCity();
// this.goToUserList();
// },
// error=>console.log(error));
// }

// onSubmit(form:NgForm){
//   console.log(form);
//   this.addUser();
// }

//  goToUserList(){
//    this.router.navigate(['/get-user'])
//  }
 //  getCity(){
//   this.userservice.getAllCity().subscribe(data=>{
//     this.cities=data;
//     });
// }
// addCity(){
//   this.userservice.createCity(this.city).subscribe(data=>{
//     console.log(data);
  
//  },)
// }


// addUser(){
//     this.userservice.createUser(this.user).subscribe(data=>{
//     console.log(data);
//     this.goToUserList();
//   },
//   error=>console.log(error));
// }

// onSubmit(){
//   const user={
//     userName:this.userName,
//     email:this.email,
//     gender:this.gender,
//     phoneNumber:this.phoneNumber,
//     city:{
//       id:this.selectedCityId
//     },
//   };
// }










}


//   user: User = { username: '', email: '', city: City };
//   cities: City[] = [];
// constructor(
   
//     private userService: UserserviceService,
//    // private cityService: CityService
//   ) {}

//   ngOnInit() {
//     this.userService.getCities().subscribe((cities) => {
//       this.cities = cities;
//     });
//   }
//   onSubmit() {
//     if (!this.user.username || !this.user.email || !this.user.cityId) {
//       return;
//     }

//     this.userService.createUser(this.user).subscribe(
//       () => {
//         console.log('User registered successfully');
//         this.user = { username: '', email: '', cityId: undefined };
//       },
//       (error) => {
//         console.error('Error registering user:', error);
//       }
//     );
//   }
// }

//   onSubmit() {
//     if (this.userForm.invalid) {
//       return;
//     }

//     const user = this.userForm.value;
//     this.userService.createUser(user).subscribe(
//       () => {
//         console.log('User registered successfully');
//         this.userForm.reset();
//       },
//       (error) => {
//         console.error('Error registering user:', error);
//       }
//     );
//   }
// }




















  // cities:City[] = [];
  // selectedCityId: number | undefined;
  // //selectedCityId: Number = -1;
  // username: string = '';
  // email: string = '';
  // errorMessage: string = '';
  
  // constructor(  private userService:  UserserviceService) {}
  // onSubmit() {
  //   this.errorMessage = ''; // Clear any previous error message
  
  //   const selectedCity: City | undefined = this.cities.find(city => city.id === this.selectedCityId);
  
  //   if (!selectedCity) {
  //     this.errorMessage = 'Please select a valid city.';
  //     return;
  //   }
  
  //   const user: User = {
  //     username: this.username,
  //     email: this.email,
  //     city: selectedCity,
  //   };
  
  //   this.userService.RegisterUser(user).subscribe(
  //     () => {
  //       console.log('User registered successfully');
  //       // Reset form fields and selections
  //       this.username = '';
  //       this.email = '';
  //       this.selectedCityId = undefined;
  //     },
  //     (error) => {
  //       console.error('Error registering user:', error);
  //       this.errorMessage = 'Error registering user.';
  //     }
  //   );
  // }
  // ngOnInit() {
  //   this.userService.getCities().subscribe((data) => {
  //     this.cities = data;
  //   });
  // }

  // onSubmit() {
  //   const duplicateCity = this.cities.find(city => city.cityName === this.cityName);
  //   if (duplicateCity) {
  //     this.errorMessage = 'City name already exists.';
  //     return;
  //   }
  //   const user = {
  //         username: this.username,
  //         email: this.email,
  //         city: { id: this.selectedCityId },
  //       };
    
  //       this.userService.createUser(user).subscribe(() => {
  //         console.log('User created successfully');
  //         // Reset form fields and selections if needed
  //         this.username = '';
  //         this.email = '';
  //         this.selectedCityId = undefined;
  //       },
  //       (error) => {
  //         console.error('Error creating user:', error);
  //       });
  //     }
    
  
    
  
//   onSubmit() {
//     this.errorMessage = ''; // Clear any previous error message
// // Check if user with the given email or username already exists
//     this.userService.check(this.email, this.username).subscribe(
//       (duplicateCheckResult) => {
//         if (duplicateCheckResult.emailExists) {
//           this.errorMessage = 'Email is already registered.';
//         } else if (duplicateCheckResult.usernameExists) {
//           this.errorMessage = 'Username is already taken.';
//         } else {
//           // Proceed with user registration
//           const user = {
//             username: this.username,
//             email: this.email,
//             city: { id: this.selectedCityId }
//           };

//           this.userService.RegisterUser(user).subscribe(
//             () => {
//               console.log('User registered successfully');
//               // Reset form fields and selections
//               this.username = '';
//               this.email = '';
//               this.selectedCityId = undefined;
//             },
//             (error) => {
//               console.error('Error registering user:', error);
//               this.errorMessage = 'Error registering user.';
//             }
//           );
//         }
//       },
//       (error) => {
//         console.error('Error checking duplicate:', error);
//         this.errorMessage = 'Error checking duplicate.';
//       }
//     );
//   }









  //   onSubmit() {
  //   const user = {
  //     username: this.username,
  //     email: this.email,
  //     city: { id: this.selectedCityId },
  //   };

  //   this.userService.createUser(user).subscribe(() => {
  //     console.log('User created successfully');
  //     // Reset form fields and selections if needed
  //     this.username = '';
  //     this.email = '';
  //     this.selectedCityId = undefined;
  //   },
  //   (error) => {
  //     console.error('Error creating user:', error);
  //   });
  // }

