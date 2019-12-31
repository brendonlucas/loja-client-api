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

  postProduto(produto: any, file: Set<File>){
    const formData = new FormData();
    file.forEach(file => formData.append('file',file, file.name))
    formData.append('name',produto['name'])
    formData.append('quantidade', produto['quantidade'])
    formData.append('preco',produto['preco'])
    
    return this.http.post(this.produtosListUrl, formData)


  }

  putProduto(id:number, produto: any){
    return this.http.put(this.produtosListUrl + id + '/update', produto)

  }
  deleteProduto(id:number){
    return this.http.delete(this.produtosListUrl + id + '/delete')
  }

  
}
