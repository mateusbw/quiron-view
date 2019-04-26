import { Component, OnInit } from '@angular/core';
import { MonitoriaService } from "./../../service/monitoria.service";


@Component({
  selector: 'app-listar-monitoria',
  templateUrl: './listar-monitoria.component.html',
  styleUrls: ['./listar-monitoria.component.sass']
})
export class ListarMonitoriaComponent implements OnInit {

  public monitorias;
  constructor(private monitoriaService: MonitoriaService) { }
  

  ngOnInit() {
    this.monitoriaService.listarMonitorias().subscribe(data=>{
      console.log(data);
      this.monitorias = data;
    },error =>{
      console.error(error);
    })
  }

}
