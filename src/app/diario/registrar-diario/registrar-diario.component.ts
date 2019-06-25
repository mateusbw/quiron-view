import { Component, OnInit } from '@angular/core';
import { MonitoriaService } from 'src/app/service/monitoria.service';
import { AlunoService } from 'src/app/service/aluno.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { NgForm } from '@angular/forms';
import {AuthService} from 'src/app/service/auth.service'
import { DiarioService } from 'src/app/service/diario.service'
import { Subject } from 'rxjs';



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
  public pesquisaAlunos:string;
  public alunosPesquisa;

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private diarioService: DiarioService,
              private authService: AuthService,
              private monitoriaService: MonitoriaService,
              private alunoService: AlunoService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.pesquisaAlunos;
     this.listaAlunos =[];
     this.dadosMonitoria = {}
     this.diario = {
       id_monitoria: null, 
       data_diario: null,
       conteudo_ministrado: null,
       listaAlunos: []
     }

     //Busca os dados do monitor logado
     this.monitor = this.authService.getUser();
     console.log(this.monitor)

     //Busca os dados de monitoria a partir do id do monitor
     this.monitoriaService.buscarMonitoriaPorMonitor(this.monitor.id).subscribe(data => {
       this.dadosMonitoria = data;
       console.log("Monitoria: ",data);
       this.monitoriaService.buscarAlunosByMonitoria(this.dadosMonitoria.id).subscribe(data => {
            
            this.listaAlunos = data;
            console.log('lista alunos '+this.listaAlunos);
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

      this.diarioService.registrarDiario(this.diario).subscribe(data => {
         this.messageService.addMsgSuccess('MSG_SUCESSO_REGISTRAR_DIARIO');
         this.diario = {
           id_monitoria: null, 
           data_diario: null,
           conteudo_ministrado: null,
           listaAlunos: []
        }
        this.router.navigate(['/']);
      }, error => {
        this.messageService.addMsgDanger(error.error.message);
      })
  }

  public pesquisarAluno(){
    delete this.alunosPesquisa;
    this.alunoService.listarAlunoPorNome(this.pesquisaAlunos).subscribe(data =>{
      this.alunosPesquisa = data;
    });
  }

  public inserirAluno(aluno){
    var aux = 0;
    console.log(aluno);
    if(this.listaAlunos.length >0){
      for(let a of this.listaAlunos){
        if (a!=null && a.id == aluno.id){
          console.log(a);
          aux = 1;
        }
      }
    }
    
    if(aux != 1){
      aluno.presente = false;
      this.listaAlunos.push(aluno);
      console.log(this.listaAlunos)
    }
    this.pesquisaAlunos = "";
    this.alunosPesquisa = false;
  }

  // public formataHora(){
  //   this.diario.data_diario = new Date(this.diario.data_diario).toUTCString;
    
  //   console.log(this.diario.data_diario);
  // }

}
