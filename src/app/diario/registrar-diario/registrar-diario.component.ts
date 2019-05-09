import { Component, OnInit } from '@angular/core';
import { MonitoriaService } from 'src/app/service/monitoria.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { NgForm } from '@angular/forms';
import {AuthService} from 'src/app/service/auth.service'
import { DiarioService } from 'src/app/service/diario.service'



@Component({
  selector: 'app-registrar-diario',
  templateUrl: './registrar-diario.component.html',
  styleUrls: ['./registrar-diario.component.sass']
})
export class RegistrarDiarioComponent implements OnInit {
  public listaAlunos;
  public alunosPresentes;
  public dadosMonitoria;
  public monitor;
  public diario;

  constructor(private diarioService: DiarioService,
              private authService: AuthService,
              private monitoriaService: MonitoriaService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
     this.listaAlunos = {}
     this.dadosMonitoria = {}
     this.diario = {
       id_monitoria: null, 
       data_diario: null,
       conteudo_ministrado: null,
       listaAlunos: []
     }

     //Busca os dados do monitor logado
     this.monitor = this.authService.getSession();
     console.log(this.monitor)

     //Busca os dados de monitoria a partir do id do monitor
     this.monitoriaService.buscarMonitoriaPorMonitor(this.monitor.id).subscribe(data => {
       this.dadosMonitoria = data;
       this.monitoriaService.buscarAlunosByMonitoria(this.dadosMonitoria.id).subscribe(data => {
            this.listaAlunos = data;
            //Fazer um for e adicionar o atributo selected para todos os alunos.
            }, error => {
                console.log(error);
            })
     }, error => {
       console.log(error);
     })

     //Com os dados de monitoria, busca os alunos que estiveram presentes alguma vez naquela monitoriaa.
     
  }

  public enviar(formulario: NgForm) {
      this.alunosPresentes = [];
      this.diario.id_monitoria = this.dadosMonitoria.id;
      //this.formataHora();
      for(let aluno of this.listaAlunos){
        if(aluno.presente == true){
          this.alunosPresentes.push(aluno.id);
        }
      }
      this.diario.listaAlunos = this.alunosPresentes;
      console.log(this.diario);
      this.diarioService.registrarDiario(this.diario).subscribe(data => {
        console.log("DIARIO REGISTRADO COM SUCESSO!");
      }, error => {
        console.log(error);
      })
  }

  // public formataHora(){
  //   this.diario.data_diario = new Date(this.diario.data_diario).toUTCString;
    
  //   console.log(this.diario.data_diario);
  // }

}
