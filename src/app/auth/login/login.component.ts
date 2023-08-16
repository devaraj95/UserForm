import { Component, OnInit } from '@angular/core';
import { Login } from '../class/login';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login:Login=new Login("","");

  constructor(private authservice:AuthserviceService,
              private router:Router
    ){

  }

 ngOnInit(): void {
   
 }

 userLogin(){
    this.authservice.login(this.login).subscribe((data)=>{
    console.log(data);
    console.log('User Login successfully');
    // if(data.token){
    // this.authservice.setToken(data.token);
    // this.router.navigateByUrl('/get-user')
    // }

    //this.authservice.setRoles(data.user.roles);
     // const role=response.user.role[0].roleName;
    // if(role==='Admin'){
    //   this.router.navigate(['/admin']);
// }else{
    //   this.router.navigate(['/user'])
    // }

    






    if(data.token){
      alert(data.token)
      const jwtToken=data.token
      localStorage.setItem('JWT',jwtToken);
      this.router.navigateByUrl('/get-user')
      //this.router.navigate(['/get-city'])

    }
   
   },
   (error) => {
    console.error('Error Login user:', error);
  }
);

 }
  
 

 


  onSubmit(form:NgForm){
    if (form.invalid) {
      return;
    }
    console.log("form submitted")
    console.log(form.value)
   this.userLogin();

  }



}

