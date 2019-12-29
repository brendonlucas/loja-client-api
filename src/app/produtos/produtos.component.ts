import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : Array<any>;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.produtosService.listar().subscribe(data=>this.produtos = data)
  }

}
