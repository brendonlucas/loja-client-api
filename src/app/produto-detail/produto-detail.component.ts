import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProdutosService } from '../produtos.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  produto: any;
  newDadosProduto: any;
  labelProduto: any;
  dados = localStorage
  router: Router;
  venda: any;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private location: Location,
    router: Router,


  ) { this.router = router;}

  ngOnInit(): void {
    this.getProduto();
    this.newDadosProduto = {};
    this.venda = {};
  }


  getProduto(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(id).subscribe(produto => this.produto = produto,
    );
  }

  putProduto(frm: FormGroup) {
    const id = + this.route.snapshot.paramMap.get('id');
    this.produtoService.putProduto(id, this.produto).subscribe(resposta => {
      
    });
    
  }

  deleteProduto(){
    const id = + this.route.snapshot.paramMap.get('id');
    this.produtoService.deleteProduto(id).subscribe(resposta => {
    
    });
    this.router.navigate(['/produtos-list']);
  }

  postVenda(){
    const id = + this.route.snapshot.paramMap.get('id');
    console.log(this.venda)
    this.produtoService.postVenda(this.venda, id).subscribe(
      success => {
        console.log(success),
        document.getElementById('mensagem').innerHTML = "Criado com sucesso";
      },
      error => {
        console.log(error);
        document.getElementById('mensagem1').innerHTML = error['error']['error'];
      }
    )


  }


}
