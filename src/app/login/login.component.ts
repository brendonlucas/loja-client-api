import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario()
  public dadosUser: any
  usuarioAutenteicado: any
  error: any;
  dados = localStorage

  mostarItens = new EventEmitter<any>();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  login() {
    console.log(this.usuario)
    this.authService.login(this.usuario).subscribe(

      success => {
        console.log(success),
        localStorage.setItem('currentUserName', success['name']);
        localStorage.setItem('currentUserToken', success['token']);
        console.log(localStorage['currentUserToken'])
        console.log(localStorage['currentUserName'])
        this.router.navigate(['/'])
      },
      error => {
        console.log(error);
        console.log(localStorage['currentUserToken'])
        console.log(localStorage['currentUserName'])
        document.getElementById('mensagem').innerHTML = "Usuario não encontrado";
      }
    )


  }
}


/*
success => this.router.navigate(['list']),
      error => this.error = error


      login() {
    console.log(this.usuario)
    this.authService.login(this.usuario).subscribe(user => this.dadosUser = user,
      (error) => {
        console.log(error), document.getElementById('mensagem').innerHTML = "Usuario não encontrado",
        this.usuarioAutenteicado = error.status;

      })
        if (this.usuarioAutenteicado == "ff"){
          this.usuarioAutenteicado = true
          this.mostarItens.emit(true)

        }console.log(this.dadosUser)
    console.log(this.usuarioAutenteicado )



  }
*/