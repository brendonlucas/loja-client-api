import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosListUrl = "http://127.0.0.1:8000/produtos/"
  addVendaUrl = "http://127.0.0.1:8000/vendas/"
  newProdutosUrl = "http://127.0.0.1:8000/produtos/novos"

  header = {
    headers: new HttpHeaders()
      .set('Authorization', "token " + localStorage['currentUserToken'])
  }

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.produtosListUrl);
  }

  getProduto(id: number): Observable<any> {
    return this.http.get<any[]>(this.produtosListUrl + id + '/');
  }

  getNewProdutos() {
    return this.http.get<any[]>(this.newProdutosUrl);
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
    formData.append('descricao',produto['descricao'])
    
    return this.http.post(this.produtosListUrl, formData, this.header)


  }

  putProduto(id:number, produto: any){
    return this.http.put(this.produtosListUrl + id + '/update', produto, this.header)

  }
  deleteProduto(id:number){
    return this.http.delete(this.produtosListUrl + id + '/delete', this.header)
  }

  postVenda(venda: any, id: any){
    return this.http.post(this.addVendaUrl + id + "/comprar/", venda, this.header)

  }

  
}
