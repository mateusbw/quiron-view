import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from 'src/app/service/curso.service';
import { AlunoService } from 'src/app/service/aluno.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-incluir-aluno',
  templateUrl: './incluir-aluno.component.html',
  styleUrls: ['./incluir-aluno.component.scss']
})
export class IncluirAlunoComponent implements OnInit {
  bsInlineValue = new Date();
  public aluno;
  public opcoesCursos;
  constructor(private cursoService: CursoService,
              private alunoService: AlunoService, 
              private router: Router,
              private messageService: MessageService,
              private authService: AuthService) { }

  ngOnInit() {
    this.aluno = {};
    this.cursoService.listarCursos().subscribe(data => {
      this.opcoesCursos = data;
    }, error => {
      console.error(error)
    })
  }
  
  public enviar(formulario: NgForm) {
    if(formulario.valid){
      this.aluno.idAlunoCadastrou = this.authService.getUser().id;
      this.alunoService.incluirAluno(this.aluno).subscribe(data=>{
        this.router.navigate(['/aluno']);
        this.messageService.addMsgSuccess('MSG_REGISTRO_INCLUIDO_SUCESSO');
      }, error=>{
        this.messageService.addMsgDanger("MSG_ERRO_INCLUIR");
        console.error(error);
      }
      )
    }
  }
}
