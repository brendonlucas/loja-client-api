import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionariosUrl = "http://127.0.0.1:8000/funcionarios/add/"

  constructor(private http: HttpClient) { }

  getFuncionarios(){
    return this.http.get<any[]>(this.funcionariosUrl)
  }

  postFuncionario(funcionario: any){
    const formData = new FormData();
    let funcionario_complement: any = {
      'username': funcionario['username'],
      'password': funcionario['password'],
      'email': funcionario['email']
    }
    formData.append('name',funcionario['name'])
    formData.append('cpf', funcionario['telefone'])
    formData.append('telefone', funcionario['telefone'])
    formData.append('username',funcionario['username'])
    formData.append('password', funcionario['password'])
    formData.append('email', funcionario['email'])

    return this.http.post(this.funcionariosUrl, formData)
  }
}
