import { Component, OnInit } from '@angular/core';
import { Signup } from '../class/signup';
import { FormBuilder, FormGroup, NgControl, NgForm, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUp: Signup = new Signup("", "", "", "", "");
  //userForm!:FormGroup;
  constructor(
    private authservive: AuthserviceService,
    //private fb:FormBuilder
  ) {
  }
  ngOnInit(): void {
//     this.signUp = {
//   username:"",
//       email: "",
//       password:"",
//       confirmPassword: "",
//           role:""
//     }, 
//     { validator: this.passwordMatchValidator }
//  }
  }
//   private passwordMatchValidator(fg: FormGroup) {
//     const password = fg.get('password')?.value;
//     const confirmPassword = fg.get('confirmPassword')?.value;
//     if (password != confirmPassword) {
//       fg.get("confirmPassword")?.setErrors({ passwordMismatch: true });
//     } else {
//       fg.get('confirmPassword')?.setErrors(null);
//     }
//   }
  userSigunup() {
    this.authservive.signUp(this.signUp).subscribe((data) => {
      console.log(data);
      console.log('User Registeration successfully');
    },
      (error) => {
        console.error('Error Registeration user:', error);
      }
    );

  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // console.log(this.userForm.value);

    this.userSigunup();

  }
}
class SignUp {

  id!: Number;
  username!: string;
  email!: string;
  password!: string;
  role!: string;


}
