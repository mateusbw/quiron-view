import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-incluir-aluno',
  templateUrl: './incluir-aluno.component.html',
  styleUrls: ['./incluir-aluno.component.scss']
})
export class IncluirAlunoComponent implements OnInit {

  public aluno;
  public opcoesCursos;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.aluno = {};

    this.cursoService.listarCursos().subscribe(data=>{
      console.log(data);
      this.opcoesCursos = data;
    },error =>{
      console.error(error);
    })
  }

  public enviar(formulario: NgForm){
    if(formulario.valid){
      console.log(this.aluno);
    }
  }
}
