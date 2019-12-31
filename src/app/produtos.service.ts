import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosListUrl = "http://127.0.0.1:8000/produtos/"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.produtosListUrl);
  }

  getProduto(id: number): Observable<any> {
    return this.http.get<any[]>(this.produtosListUrl + id + '/');
  }

  searchProduto(nome_produto: any){
    return this.http.get<any[]>(this.produtosListUrl + "?search=" + nome_produto);
  }

  postProduto(produto: any){
    return this.http.post(this.produtosListUrl, produto)

  }

  putProduto(id:number, produto: any){
    return this.http.put(this.produtosListUrl + id + '/', produto)

  }
  deleteProduto(id:number){
    return this.http.delete(this.produtosListUrl + id + '/')
  }

  
}
