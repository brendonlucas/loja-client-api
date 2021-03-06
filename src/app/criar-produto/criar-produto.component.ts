import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  file: Set<File>;

  

  constructor(private produtoService: ProdutosService,
    router: Router, private route: ActivatedRoute,
  ) { this.router = router; }

  ngOnInit() {
    this.novoProduto = {}
   
  }

  onChange(event: any){
    console.log(event)
    this.file = new Set();
    const fileSelected = <FileList>event.srcElement.files;
    document.getElementById('fileLabel').innerHTML = fileSelected[0].name;
    this.file.add(fileSelected[0])
    
  }
  
  postProduto(frmP: FormGroup) {
    this.produtoService.postProduto(this.novoProduto, this.file).subscribe(resposta => this.idNovoProduto = resposta);
    this.mensagem = this.novoProduto.name + " adicionado com sucesso!"
 

  }

}
