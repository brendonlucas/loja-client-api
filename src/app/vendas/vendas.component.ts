import { Component, OnInit } from '@angular/core';
import { VendaService } from './venda.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  vendas: Array<any>
  p : Number = 1 ;
  count : Number = 5;
  dados = localStorage

  constructor(private vendasService: VendaService) {this.vendas }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.vendasService.listar().subscribe(data=>this.vendas = data)
  }

}
