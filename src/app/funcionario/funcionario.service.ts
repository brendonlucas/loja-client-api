import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  addfuncionariosUrl = "http://127.0.0.1:8000/funcionarios/add/"
  funcionariosUrl = "http://127.0.0.1:8000/funcionarios/"
  header = {
    headers: new HttpHeaders()
      .set('Authorization', "token " + localStorage['currentUserToken'])
  }

  constructor(private http: HttpClient) { }

  getFuncionarios(){
    return this.http.get<any[]>(this.funcionariosUrl, this.header)
  }

  postFuncionario(funcionario: any){
    const formData = new FormData();

    formData.append('name',funcionario['name'])
    formData.append('cpf', funcionario['telefone'])
    formData.append('telefone', funcionario['telefone'])
    formData.append('username',funcionario['username'])
    formData.append('password', funcionario['password'])
    formData.append('email', funcionario['email'])

    return this.http.post(this.addfuncionariosUrl, formData, this.header)
  }
}
