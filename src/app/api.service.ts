import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CitoyenClasse } from './services/citoyen-classe';
import { Citoyen } from './citoyen';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private usCit: { password: any; email: any };
  public APIurl = environment.apiUrl;
  private handleError: any;

  constructor(private http: HttpClient) { }

  // public connectCitoyen({email, password}): Observable<Citoyen>{
  //   this.usCit = {
  //     email,
  //     password
  //   };
  //   return this.http
  //   .get(this.APIurl + '/db-Viva-RDC/' + this.usCit).
  // }
}
