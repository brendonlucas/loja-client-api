import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProdutosService }  from '../produtos.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {
  
  produto: any;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getProduto();
  }
  
  getProduto(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(id).subscribe(produto => this.produto = produto);
  }

}
