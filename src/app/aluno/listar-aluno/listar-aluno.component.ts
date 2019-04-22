import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.sass']
})
export class ListarAlunoComponent implements OnInit {

  public alunos;
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.listarAlunos().subscribe(data=>{
      console.log(data);
      this.alunos = data;
    },error =>{
      console.error(error);
    })
  }

}
