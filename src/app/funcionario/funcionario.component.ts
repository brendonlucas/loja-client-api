import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Array<any>

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.getFuncionarios()
  }

  getFuncionarios(){
    this.funcionarioService.getFuncionarios().subscribe(data=>this.funcionarios = data)

  }

}
