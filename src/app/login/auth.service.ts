import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  private usuarioAutenteicado: boolean = false;
  loginUrl = "http://127.0.0.1:8000/api-token-auth/"
  public dadosUser: any;

  constructor(private http: HttpClient, private router: Router) { 

    
  }


  get_token(): string {
    return localStorage.getItem('token');
  }

  login(usuario: any) {
    return this.http.post(this.loginUrl,usuario)
  }

  login2(usuario: any): Observable<any> {
    return this.http.post(this.loginUrl, usuario)
  }
  

}





