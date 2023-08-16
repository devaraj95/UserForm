import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { City } from '../class/city';
import { AuthserviceService } from '../auth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseURL = "http://localhost:8081/api/cities/";
  private baseURL2 = "http://localhost:8081/api/users/";


  // requestHeader=new HttpHeaders({
  //   "No-Auth":"True"
  // })


  constructor(private httpClient: HttpClient,
    private authservice: AuthserviceService) { }

  ngOnInit(): void {

  }                   //User[]
  getUsers(): Observable<User[]> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
      //console.log('Headers:', headers);
      return this.httpClient.get<User[]>('http://localhost:8081/api/users/', { headers });
    } else {
      console.log('No headers available. JWT token might be missing or invalid.');
      return new Observable();
    }
  }







  // return this.httpClient.get<any>('http://localhost:8081/api/users/',{
  //   headers:this.createAuthorizationHeader()
  // });
  // }













  createUser(user: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
      return this.httpClient.post<any>('http://localhost:8081/api/users/', user, { headers })

    } else {
      return new Observable();
    }
  }

  getUserById(id: Number): Observable<User> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
    return this.httpClient.get<User>('http://localhost:8081/api/users/' + id,{ headers }
    );

  } else {
    return new Observable();
  }
    //return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id: Number, user: User): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
    return this.httpClient.put<User>('http://localhost:8081/api/users/' + id, user,{ headers })
  } else {
    return new Observable();
  }
  }

  deleteEmployee(id: Number): Observable<User> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
    return this.httpClient.delete<User>('http://localhost:8081/api/users/' + id,{ headers })
  } else {
    return new Observable();
  }
  }

  //==========================================================================

  getAllCity(): Observable<City[]> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
    return this.httpClient.get<City[]>('http://localhost:8081/api/cities/',{ headers });
  } else {
    return new Observable();
  }
  }
  createCity(city: City): Observable<City> {
    const headers = this.createAuthorizationHeader();
    if (headers) {

    return this.httpClient.post<City>('http://localhost:8081/api/cities/', city,{ headers })
  } else {
    return new Observable();
  }
  }
  getCityById(id: Number): Observable<City> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
    return this.httpClient.get<City>('http://localhost:8081/api/cities/' + id,{ headers })
    //return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  } else {
    return new Observable();
  }
  }
  updateCity(id: Number, user: City): Observable<City> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
    return this.httpClient.put<City>('http://localhost:8081/api/cities/' + id, user,{ headers })
  } else {
    return new Observable();
  }
  }
  deleteCity(id: Number): Observable<City> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
    return this.httpClient.delete<City>('http://localhost:8081/api/cities/' + id,{ headers })
  } else {
    return new Observable();
  }
  }


  // private createAuthorizationHeader(){
  //   const jwtToken=localStorage.getItem('JWT');
  //   if(jwtToken){
  //     return new HttpHeaders().set(
  //       'Authorization','Bearer' + jwtToken
  //     )
  //   } else{
  //     console.log("JWT token not found in the Local Storage");
  //   }
  //   return null;

  // }
  private createAuthorizationHeader(): HttpHeaders | null {
    const jwtToken = localStorage.getItem('JWT');

    if (jwtToken) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log("JWT token not found in the Local Storage");
      return null;
    }
  }


  // public createAuthorizationHeader() {
  //   const jwtToken = localStorage.getItem('JWT');
  //   if (jwtToken) {
  //     return this.requestHeader= new HttpHeaders().set(
  //       'Authorization', 'Bearer ' + jwtToken
  //     )
  //   } else {
  //     console.log("JWT token not found in the Local Storage");
  //   }
  //   return null;
  // }

}










//   getCities(): Observable<any[]> {
//     return this.http.get<any[]>('http://localhost:8081/api/cities/');
//   }
//   RegisterUser(user: User): Observable<User> {
//     return this.http.post<User>('http://localhost:8081/api/users/', user);
//   }
//  createUser(user: User): Observable<User> {
//     return this.http.post<User>('http://localhost:8081/api/users/', user);
//   }
  // checkDuplicate(email: string, username: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/check-duplicate`, {
  //     params: { email, username }
  //   });
  // }

