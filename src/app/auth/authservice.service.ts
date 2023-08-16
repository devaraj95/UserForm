import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from './class/signup';
import { Login } from './class/login';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  requestHeader= new HttpHeaders({
"No-Auth":"True"

  });  

  constructor( private http:HttpClient) {
   
   }
   signUp(sign:Signup):Observable<any>{
     return this.http.post<any>('http://localhost:8081/api/signUp',sign)
  }
  login(login:Login):Observable<any>{
    return this.http.post<any>('http://localhost:8081/api/Login',login)
 }

 //=====================
 public setRoles(roles: []) {
  localStorage.setItem('roles', JSON.stringify(roles));
}

// public getRoles(): [] {
//   return JSON.parse(localStorage.getItem('roles'));
// }

public getRoles(): string[] {
  const rolesJson = localStorage.getItem('roles');
  
  if (rolesJson) {
    return JSON.parse(rolesJson);
  } else {
    return []; // Return an empty array if rolesJson is null
  }
}

public setToken(jwtToken: string) {
  localStorage.setItem('jwtToken', jwtToken);
}

public getToken(): string|null {
  return localStorage.getItem('jwtToken');
}

public clear() {
  localStorage.clear();
}

public isLoggedIn() {
  return this.getRoles() && this.getToken();
}
}



