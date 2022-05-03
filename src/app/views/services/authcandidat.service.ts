import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthcandidatService {

  constructor(private http:HttpClient) { }


  register(body:any){
    return this.http.post('http://127.0.0.1:8000/api/users',body)
  }
  login(body:any){
     return this.http.post('http://127.0.0.1:8000/api/login',body)
   }

   saveToken(token:any){
        localStorage.setItem('tokencandidat',token)

   }
}
