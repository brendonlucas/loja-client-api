import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dados = localStorage
  produtos: any;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.getProdutos()
  }

  getProdutos(){
    this.produtosService.listar().subscribe(data=>this.produtos = data)
  }

}
