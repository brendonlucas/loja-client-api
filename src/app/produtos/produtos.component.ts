import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : Array<any>;
  busca: any;
  p : Number = 1 ;
  count : Number = 5;
  dados = localStorage

  constructor(private produtosService: ProdutosService) { this.produtos}

  ngOnInit() {
    this.listar()
  }

  buscarProduto(frmB :any){
    const name = frmB
    this.produtosService.searchProduto(name).subscribe(data => this.produtos = data)
  }

  listar(){
    this.produtosService.listar().subscribe(data=>this.produtos = data)
  }

}
