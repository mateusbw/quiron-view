import { StatusService } from './../../service/status.service';
import { AlunoService } from 'src/app/service/aluno.service';
import { MonitoriaService } from './../../service/monitoria.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-excluir-monitoria',
  templateUrl: './excluir-monitoria.component.html',
  styleUrls: ['./excluir-monitoria.component.sass']
})
export class ExcluirMonitoriaComponent implements OnInit {

  public monitoria;
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
    this.monitoriaService.buscarMonitoria(this.monitoriaId).subscribe(data=>{
      this.monitoria = data;
      this.formataHoraCorreto();
    }, error =>{
      this.messageService.addMsgDanger("Erro ao buscar monitoria. Favor contactar o Administrador.")
    })
    
    
  }

  public enviar(formulario: NgForm) {
  
    this.monitoriaService.excluirMonitoria(this.monitoriaId).subscribe(data=>{
      this.router.navigate(['/monitoria']);
      this.messageService.addMsgSuccess('MSG_SUCESSO_EXCLUIR_MONITORIA');
    }, error=>{
      console.error(error);
      this.messageService.addMsgDanger(error.error.message);
      
    }
    )
    
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

}
