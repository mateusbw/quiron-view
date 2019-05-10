import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/service/aluno.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/core/message/message.service';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.sass']
})
export class ListarAlunoComponent implements OnInit {

  public alunos;
  public opcoesCursos;
  public filtro;
  public todos:boolean;
  constructor(private alunoService: AlunoService,
              private cursoService: CursoService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.filtro = {
    };

    this.cursoService.listarCursos().subscribe(data => {
      this.opcoesCursos = data;
    }, error => {
      console.error(error)
    })
  }

  public enviar(form : NgForm){
    if(!this.filtro.todos && !(this.filtro.idCurso || this.filtro.nome)){
        this.messageService.addMsgDanger("Informe pelo menos um filtro");
    }else{
      this.alunoService.listarAlunosPorFiltro(this.filtro).subscribe(data=>{
        console.log(data);
        this.alunos = data;
      },error =>{
        console.error(error);
        this.messageService.addMsgDanger("MSG_ERRO_CONSULTA");
      })
    }
  }

  public reset(){
    delete this.alunos;
  }

  public limpaCampos(){
    delete this.filtro.idCurso;
    delete this.filtro.nome;
  }

}
