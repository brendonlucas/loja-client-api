import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VendaService {

  vendaListUrl = "http://127.0.0.1:8000/vendas/"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.vendaListUrl);
  }

  postVenda(id: number, venda: any){
    return this.http.post(this.vendaListUrl + id + "/", venda);
  }
}
