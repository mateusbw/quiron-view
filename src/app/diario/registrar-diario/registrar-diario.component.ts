import { Component, OnInit } from '@angular/core';
import { MonitoriaService } from 'src/app/service/monitoria.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';

@Component({
  selector: 'app-registrar-diario',
  templateUrl: './registrar-diario.component.html',
  styleUrls: ['./registrar-diario.component.sass']
})
export class RegistrarDiarioComponent implements OnInit {
  public listaAlunos;
  public dadosMonitoria;
  public diario;
  public aux;

  constructor(private monitoriaService: MonitoriaService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
     this.listaAlunos = {}
     this.dadosMonitoria = {}

     //Busca os dados de monitoria a partir do id do monitor
     this.monitoriaService.buscarMonitoriaPorMonitor(1).subscribe(data => {
       this.dadosMonitoria = data;
     }, error => {
       console.log(error);
     })

     //Com os dados de monitoria, busca os alunos que estiveram presentes alguma vez naquela monitoriaa.
     this.monitoriaService.buscarAlunosByMonitoria(1).subscribe(data => {
      this.listaAlunos = data;
      //Fazer um for e adicionar o atributo selected para todos os alunos.
    }, error => {
      console.log(error);
    })
  }


}
