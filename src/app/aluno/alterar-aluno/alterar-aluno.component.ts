import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/app/service/aluno.service';
import { MessageService } from 'src/app/core/message/message.service';
import { CursoService } from 'src/app/service/curso.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alterar-aluno',
  templateUrl: './alterar-aluno.component.html',
  styleUrls: ['./alterar-aluno.component.sass']
})
export class AlterarAlunoComponent implements OnInit {

  public aluno:any = {};
  public opcoesCursos;

  constructor(route: ActivatedRoute,
              private router: Router,
              private alunoService: AlunoService, 
              private messageService: MessageService,
              private cursoService: CursoService,) { 
    const alunoId = route.snapshot.params['id'];
    this.alunoService.buscarAluno(alunoId).subscribe(data=>{
      this.aluno = data;
      this.aluno.idCurso = data.cursos[0].id
    }, error =>{
      this.messageService.addMsgDanger("Erro ao buscar aluno. Favor contactar o Administrador.")
    })
  }

  ngOnInit() {

    this.cursoService.listarCursos().subscribe(data => {
      this.opcoesCursos = data;
    }, error => {
      this.messageService.addMsgDanger("Erro ao carregar cursos. Favor contactar o Administrador.")
    })
  }

  public enviar(formulario: NgForm) {
    if(formulario.valid){
      this.aluno.idAlunoCadastrou = 1;
      this.alunoService.incluirAluno(this.aluno).subscribe(data=>{
        this.router.navigate(['/aluno']);
        this.messageService.addMsgSuccess('MSG_REGISTRO_ALTERADO_SUCESSO');
      }, error=>{
        this.messageService.addMsgDanger("MSG_ERRO_ALTERAR");
        console.error(error);
      }
      )
    }
  }

}
