import { StatusService } from './../../service/status.service';
import { AlunoService } from 'src/app/service/aluno.service';
import { MonitoriaService } from './../../service/monitoria.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alterar-monitoria',
  templateUrl: './alterar-monitoria.component.html',
  styleUrls: ['./alterar-monitoria.component.sass']
})
export class AlterarMonitoriaComponent implements OnInit {

  public monitoria;
  public opcoesDisciplinas;
  public opcoesAlunos;
  public opcoesSemestres;
  public opcoesStatus;
  private monitoriaId;
  constructor(private monitoriaService:  MonitoriaService,
              private disciplinaService: DisciplinaService,
              private alunoService: AlunoService,
              private stausService: StatusService,
              private router: Router,
              route: ActivatedRoute,
              private messageService: MessageService) { 
              this.monitoriaId = route.snapshot.params['id'];
              
               }

  ngOnInit() {
    /*
    this.monitoria = {
      disciplina:{},
      horario:{},
      monitor:{},
      status:{
        id: 1,
      }
    };
    */
    this.monitoriaService.buscarMonitoria(this.monitoriaId).subscribe(data=>{
      this.monitoria = data;
      this.formataHoraCorreto();
    }, error =>{
      this.messageService.addMsgDanger("Erro ao buscar monitoria. Favor contactar o Administrador.")
    })

    this.opcoesSemestres =[
      "2019/1",
      "2019/2",
      "2020/1",
      "2020/2",
      "2021/1",
      "2021/2",
      "2022/1",
      "2022/2",
      "2023/1",
      "2023/2",
      "2024/1",
      "2024/2",
      "2025/1",
      "2025/2",
      "2026/1",
      "2026/2"]; 

    this.disciplinaService.listarDisciplinas().subscribe(data => {
      this.opcoesDisciplinas = data;
    }, error => {
      console.error(error)
    })

    this.alunoService.listarAlunos().subscribe(data => {
      this.opcoesAlunos = data;
    }, error => {
      console.error(error)
    })

    this.stausService.listarStatus().subscribe(data => {
      this.opcoesStatus = data;
    }, error => {
      console.error(error)
    })
    
  }

  public enviar(formulario: NgForm) {
    if(formulario.valid){
      //this.formataHoraCorreto();
      this.monitoriaService.atualizaMonitoria(this.monitoria).subscribe(data=>{
        this.router.navigate(['/monitoria']);
        this.messageService.addMsgSuccess('MSG_SUCESSO_ALTERAR_MONITORIA');
      }, error=>{
        this.messageService.addMsgDanger(error.error.message);
        console.error(error);
      }
      )
    }
  }

  formataHoraCorreto(){
    if (this.monitoria.horario.segunda==true){      
      console.log(this.monitoria.horario.inicio_segunda);
      this.monitoria.horario.inicio_segunda = new Date(this.monitoria.horario.inicio_segunda).toLocaleTimeString();
      this.monitoria.horario.final_segunda  = new Date(this.monitoria.horario.final_segunda).toLocaleTimeString();
      console.log(this.monitoria.horario.inicio_segunda);
    }

    if (this.monitoria.horario.terca==true){
      this.monitoria.horario.inicio_terca = new Date(this.monitoria.horario.inicio_terca).toLocaleTimeString();
      this.monitoria.horario.final_terca  = new Date(this.monitoria.horario.final_terca).toLocaleTimeString();
    }

    if (this.monitoria.horario.quarta==true){      
      this.monitoria.horario.inicio_quarta = new Date(this.monitoria.horario.inicio_quarta).toLocaleTimeString();
      this.monitoria.horario.final_quarta  = new Date(this.monitoria.horario.final_quarta).toLocaleTimeString();
    }

    if (this.monitoria.horario.quinta==true){      
      this.monitoria.horario.inicio_quinta = new Date(this.monitoria.horario.inicio_quinta).toLocaleTimeString();
      this.monitoria.horario.final_quinta  = new Date(this.monitoria.horario.final_quinta).toLocaleTimeString();
    }

    if (this.monitoria.horario.sexta==true){      
      this.monitoria.horario.inicio_sexta = new Date(this.monitoria.horario.inicio_sexta).toLocaleTimeString();
      this.monitoria.horario.final_sexta  = new Date(this.monitoria.horario.final_sexta).toLocaleTimeString();
    }
    
    if (this.monitoria.horario.sabado==true){      
      this.monitoria.horario.inicio_sabado = new Date(this.monitoria.horario.inicio_sabado).toLocaleTimeString();
      this.monitoria.horario.final_sabado  = new Date(this.monitoria.horario.final_sabado).toLocaleTimeString();
    }
  }

  public limparHorarioDesativado(){
    
    if (this.monitoria.horario.segunda==false){
      this.monitoria.horario.sala_segunda   = null;
      this.monitoria.horario.inicio_segunda = null;
      this.monitoria.horario.final_segunda  = null;
    }

    if (this.monitoria.horario.terca==false){
      this.monitoria.horario.sala_terca   = null;
      this.monitoria.horario.inicio_terca = null;
      this.monitoria.horario.final_terca  = null;
    }

    if (this.monitoria.horario.quarta==false){
      this.monitoria.horario.sala_quarta   = null;
      this.monitoria.horario.inicio_quarta = null;
      this.monitoria.horario.final_quarta  = null;
    }

    if (this.monitoria.horario.quinta==false){
      this.monitoria.horario.sala_quinta   = null;
      this.monitoria.horario.inicio_quinta = null;
      this.monitoria.horario.final_quinta  = null;
    }

    if (this.monitoria.horario.sexta==false){
      this.monitoria.horario.sala_sexta   = null;
      this.monitoria.horario.inicio_sexta = null;
      this.monitoria.horario.final_sexta  = null;
    }
    
    if (this.monitoria.horario.sabado==false){
      this.monitoria.horario.sala_sabado   = null;
      this.monitoria.horario.inicio_sabado = null;
      this.monitoria.horario.final_sabado  = null;
    }
    
   
   
  }

}
