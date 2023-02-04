import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/utils/models/UserLogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _baseUrl:string = "";
  constructor(private _http:HttpClient) { 
    this._baseUrl = environment.apiUrl;
  }

  public signInValidation(userLoginData:UserLogin):Observable<any>{
    return this._http.post(`${this._baseUrl}/auth/sign-in`,userLoginData);
  }
}
