import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    // Limpa o token removendo o usuário do local store para efetuar o logout
    localStorage.clear();
    this.router.navigate(['/'])
    
  }

}
