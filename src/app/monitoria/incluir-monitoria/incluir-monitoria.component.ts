import { StatusService } from './../../service/status.service';
import { AlunoService } from 'src/app/service/aluno.service';
import { MonitoriaService } from './../../service/monitoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-incluir-monitoria',
  templateUrl: './incluir-monitoria.component.html',
  styleUrls: ['./incluir-monitoria.component.sass']
})
export class IncluirMonitoriaComponent implements OnInit {

  public monitoria;
  public opcoesDisciplinas;
  public opcoesAlunos;
  public opcoesSemestres;
  public opcoesStatus;
  public processando;
  constructor(private monitoriaService:  MonitoriaService,
              private disciplinaService: DisciplinaService,
              private alunoService: AlunoService,
              private stausService: StatusService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.processando = false
    this.monitoria = {
      disciplina:{},
      horario:{},
      monitor:{},
      status:{
        id: 1,
      }
    };

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
      if (!this.validaHora()){
        this.messageService.addMsgDanger('MSG_ERRO_HORARIP_MONITORIA'); 
      }else{

        this.processando = true;
        
        this.monitoriaService.incluirMonitoria(this.monitoria).subscribe(data=>{
          this.router.navigate(['/monitoria']);
          this.messageService.addMsgSuccess('MSG_SUCESSO_INCLUIR_MONITORIA');
          this.processando = false;
        }, error=>{
          this.messageService.addMsgDanger(error.error.message);
          console.error(error);
          this.processando = false;
        })
        
      }
    }
  }

  formataHoraCorreto(){
    if (this.monitoria.horario.segunda==true){      
      this.monitoria.horario.inicio_segunda = new Date("1989-12-31 "+ this.monitoria.horario.inicio_segunda);
      this.monitoria.horario.final_segunda  = new Date("1989-12-31 "+ this.monitoria.horario.final_segunda);
    }

    if (this.monitoria.horario.terca==true){
      this.monitoria.horario.inicio_terca = new Date("1989-12-31 "+ this.monitoria.horario.inicio_terca);
      this.monitoria.horario.final_terca  = new Date("1989-12-31 "+ this.monitoria.horario.final_terca);
    }

    if (this.monitoria.horario.quarta==true){      
      this.monitoria.horario.inicio_quarta = new Date("1989-12-31 "+ this.monitoria.horario.inicio_quarta);
      this.monitoria.horario.final_quarta  = new Date("1989-12-31 "+ this.monitoria.horario.final_quarta);
    }

    if (this.monitoria.horario.quinta==true){      
      this.monitoria.horario.inicio_quinta = new Date("1989-12-31 "+ this.monitoria.horario.inicio_quinta);
      this.monitoria.horario.final_quinta  = new Date("1989-12-31 "+ this.monitoria.horario.final_quinta);
    }

    if (this.monitoria.horario.sexta==true){      
      this.monitoria.horario.inicio_sexta = new Date("1989-12-31 "+ this.monitoria.horario.inicio_sexta);
      this.monitoria.horario.final_sexta  = new Date("1989-12-31 "+ this.monitoria.horario.final_sexta);
    }
    
    if (this.monitoria.horario.sabado==true){      
      this.monitoria.horario.inicio_sabado = new Date("1989-12-31 "+ this.monitoria.horario.inicio_sabado);
      this.monitoria.horario.final_sabado  = new Date("1989-12-31 "+ this.monitoria.horario.final_sabado);
    }
  }

  validaHora(){
    if (this.monitoria.horario.segunda==true){   
      const ini = new Date("1989-12-31 "+ this.monitoria.horario.inicio_segunda);
      const fim = new Date("1989-12-31 "+ this.monitoria.horario.final_segunda);
      console.log('ini '+ini);
      console.log('fim '+fim);
      if (ini > fim){
        return false; 
      }else{
        return true;
      }
      
    }

    
    if (this.monitoria.horario.terca==true){
      
      const ini = new Date("1989-12-31 "+ this.monitoria.horario.inicio_terca);
      const fim = new Date("1989-12-31 "+ this.monitoria.horario.final_terca);
      
      if (ini > fim){
        return false; 
      }else{
        return true;
      }
    }

    if (this.monitoria.horario.quarta==true){      
      const ini = new Date("1989-12-31 "+ this.monitoria.horario.inicio_quarta);
      const fim = new Date("1989-12-31 "+ this.monitoria.horario.final_quarta);
      
      if (ini > fim){
        return false; 
      }else{
        return true;
      }
    }

    if (this.monitoria.horario.quinta==true){      
      const ini = new Date("1989-12-31 "+ this.monitoria.horario.inicio_quinta);
      const fim = new Date("1989-12-31 "+ this.monitoria.horario.final_quinta);
      
      if (ini > fim){
        return false; 
      }else{
        return true;
      }
    }

    if (this.monitoria.horario.sexta==true){      
      const ini = new Date("1989-12-31 "+ this.monitoria.horario.inicio_sexta);
      const fim = new Date("1989-12-31 "+ this.monitoria.horario.final_sexta);
      
      if (ini > fim){
        return false; 
      }else{
        return true;
      }
    }
    
    if (this.monitoria.horario.sabado==true){      
      const ini = new Date("1989-12-31 "+ this.monitoria.horario.inicio_sabado);
      const fim = new Date("1989-12-31 "+ this.monitoria.horario.final_sabado);
      
      if (ini > fim){
        return false; 
      }else{
        return true;
      }
    }

    return true;
  
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
