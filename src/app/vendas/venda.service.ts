import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VendaService {

  vendaListUrl = "http://127.0.0.1:8000/vendas/"
  header = {
    headers: new HttpHeaders()
      .set('Authorization', "token " + localStorage['currentUserToken'])
  }

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.vendaListUrl, this.header);
  }

  postVenda(id: number, venda: any){
    return this.http.post(this.vendaListUrl + id + "/", venda, this.header);
  }
}
