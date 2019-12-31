import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  novoProduto: any;
  router: Router;
  idNovoProduto: any;
  mensagem: any;

  constructor(private produtoService: ProdutosService,
    router: Router, private route: ActivatedRoute,
  ) { this.router = router; }

  ngOnInit() {
    this.novoProduto = {}
  }

  postProduto(frmP: FormGroup) {

    this.produtoService.postProduto(this.novoProduto).subscribe(resposta => this.idNovoProduto = resposta);
    this.mensagem = this.novoProduto.name + " adicionado com sucesso!"
 

  }

}
