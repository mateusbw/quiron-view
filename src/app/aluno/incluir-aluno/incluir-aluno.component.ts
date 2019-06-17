import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from 'src/app/service/curso.service';
import { AlunoService } from 'src/app/service/aluno.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { AuthService } from 'src/app/service/auth.service';
import { CPFValidator } from 'src/app/core/util/cpf-validator';

@Component({
  selector: 'app-incluir-aluno',
  templateUrl: './incluir-aluno.component.html',
  styleUrls: ['./incluir-aluno.component.scss']
})
export class IncluirAlunoComponent implements OnInit {
  bsInlineValue = new Date();
  public aluno;
  public opcoesCursos;
  public cpfValidator = new CPFValidator();

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
    if (formulario.valid) {
      if (this.cpfValidator.isCpfValid(this.aluno.cpf)) {
        this.aluno.idAlunoCadastrou = this.authService.getUser().id;
        this.alunoService.incluirAluno(this.aluno).subscribe(data => {
          this.router.navigate(['/aluno']);
          this.messageService.addMsgSuccess('Registro incluído com sucesso.');
        }, erro => {
          this.messageService.addMsgDanger(("Erro ao incluir registro: "+erro.error.message));
          console.error(erro);
          console.error(erro.error);
          console.error(erro.error.message);
        }
        )
      } else {
        this.messageService.addMsgDanger("CPF inválido. Por favor informe um cpf válido.");
      }
    }
  }
}
