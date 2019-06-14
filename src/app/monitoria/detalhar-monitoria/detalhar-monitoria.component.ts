import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MonitoriaService } from 'src/app/service/monitoria.service';
import { MessageService } from 'src/app/core/message/message.service';

@Component({
  selector: 'app-detalhar-monitoria',
  templateUrl: './detalhar-monitoria.component.html',
  styleUrls: ['./detalhar-monitoria.component.sass']
})
export class DetalharMonitoriaComponent implements OnInit {
  public dadosMonitoria = {};
  public monitoriaId;
  constructor(route: ActivatedRoute,
              private monitoriaService: MonitoriaService,
              private messageService: MessageService) {
      this.monitoriaId = route.snapshot.params['id'];
   }

  ngOnInit() {
    console.log(this.monitoriaId);
    this.monitoriaService.buscarDetalhesMonitoria(this.monitoriaId).subscribe(data=>{
      this.dadosMonitoria = data;
    }, error =>{
      this.messageService.addMsgDanger(error.error.message);
    });
  }

}
