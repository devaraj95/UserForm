import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { City } from '../class/city';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseURL="http://localhost:8081/api/cities/";
  private baseURL2="http://localhost:8081/api/users/";

  constructor(private httpClient:HttpClient) { }

    ngOnInit(): void {
      
   }
   getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8081/api/users/');
    }
  createUser(user:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8081/api/users/',user)
  }

  getUserById(id:Number):Observable<User>{
    return this.httpClient.get<User>('http://localhost:8081/api/users/'+id)  
    //return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id:Number,user:User):Observable<Object>{
    return this.httpClient.put<User>('http://localhost:8081/api/users/'+id,user)
  }

 deleteEmployee(id:Number):Observable<User>{
    return this.httpClient.delete<User>('http://localhost:8081/api/users/'+id)  
  }

  //==========================================================================

 getAllCity():Observable<City[]>{
    return this.httpClient.get<City[]>('http://localhost:8081/api/cities/');
 }
  createCity(city:City):Observable<City>{
    
  return this.httpClient.post<City>('http://localhost:8081/api/cities/',city)
   }
   getCityById(id:Number):Observable<City>{
    return this.httpClient.get<City>('http://localhost:8081/api/cities/'+id)  
    //return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  updateCity(id:Number,user:City):Observable<City>{
    return this.httpClient.put<City>('http://localhost:8081/api/cities/'+id,user)
  }
  deleteCity(id:Number):Observable<City>{
    return this.httpClient.delete<City>('http://localhost:8081/api/cities/'+id)  
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
}
