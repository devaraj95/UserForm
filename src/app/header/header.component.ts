import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../auth/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



constructor(private router:Router,private authservice:AuthserviceService){

}


  ngOnInit(): void {}

  public isLoggedIn() {
    return this.authservice.isLoggedIn();
  }

  public logout() {
    this.authservice.clear();
    this.router.navigate(['/home']);
  }
}
