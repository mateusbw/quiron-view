import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/service/aluno.service';
import { MessageService } from 'src/app/core/message/message.service';
import { CPFValidator } from 'src/app/core/util/cpf-validator';

@Component({
  selector: 'app-historico-presenca',
  templateUrl: './historico-presenca.component.html',
  styleUrls: ['./historico-presenca.component.sass']
})
export class HistoricoPresencaComponent implements OnInit {

  filtro = { tipo: 'nome', nome: '', cpf: '' };
  aluno;
  historico: any[] = [];
  alunos = [];
  cpfValidator = new CPFValidator();
  constructor(private alunoService: AlunoService, private messagem: MessageService) { }

  ngOnInit() {
  }

  isTipoNome() {
    return this.filtro.tipo === "nome";
  }


  public buscarAlunos() {
    console.log("buscarAlunos()")
    this.alunoService.listarAlunoPorNome(this.filtro.nome).subscribe(data => {
      data.length == 0 ? this.messagem.addMsgDanger("Nenhum registro encontrado") : console.log(data);
      this.alunos = data;
    })
  }
  resetAluno() {
    delete this.aluno;
  }

  selecionarAluno(aluno) {
    this.aluno = aluno;
    this.alunos = [];
    this.filtro.nome = aluno.nome;
  }

  reset() {
    this.filtro.nome = '';
    this.filtro.cpf = '';
    this.resetAluno()
  }

  enviar() {
    if (this.filtro.cpf == '' && !this.aluno) {
      this.messagem.addMsgDanger("Selecione um aluno ou informe um CPF válido.");
    } else {
      if (this.filtro.tipo == 'cpf' && !this.cpfValidator.isCpfValid(this.filtro.cpf)) {
        this.messagem.addMsgDanger("CPF inválido. Por favor informe um cpf válido.");
      } else {
        this.alunoService.listarHistoricoPrecenca(this.filtro).subscribe(data => {
          this.historico = data;
          data.length == 0 ? this.messagem.addMsgDanger("Nenhum registro encontrado") : console.log(data);
        }, error => {
          this.messagem.addMsgDanger(error);
        })
      }
    }
  }

}
