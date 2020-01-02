import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario/funcionario.service';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.css']
})
export class CriarFuncionarioComponent implements OnInit {

  funcionario: any;
  mensagem: any;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionario = {}
  }
  postFuncionario(frm: any){
    console.log(this.funcionario)
    this.funcionarioService.postFuncionario(this.funcionario).subscribe(
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
