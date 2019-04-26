import { MonitoriaService } from './../../service/monitoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/message/message.service';
import { DisciplinaService } from 'src/app/service/disciplina.service';

@Component({
  selector: 'app-incluir-monitoria',
  templateUrl: './incluir-monitoria.component.html',
  styleUrls: ['./incluir-monitoria.component.sass']
})
export class IncluirMonitoriaComponent implements OnInit {

  public monitoria;
  public opcoesDisciplinas;
  constructor(private monitoriaService:  MonitoriaService,
              private disciplinaService: DisciplinaService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.monitoria = {};

    this.disciplinaService.listarDisciplinas().subscribe(data => {
      this.opcoesDisciplinas = data;
    }, error => {
      console.error(error)
    })

    
  }

}
