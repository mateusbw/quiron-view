
import { Component, OnInit } from '@angular/core';
import { MonitoriaService } from "./../../service/monitoria.service";


@Component({
  selector: 'app-listar-ativas-monitoria',
  templateUrl: './listar-ativas-monitoria.component.html',
  styleUrls: ['./listar-ativas-monitoria.component.sass']
})
export class ListarAtivasMonitoriaComponent implements OnInit {
  public monitorias;
  //public isCollapsed = true;
  public isCollapsed = [];
  constructor(private monitoriaService: MonitoriaService) { }
  

  ngOnInit() {
    this.monitoriaService.listarMonitoriasAtivas().subscribe(data=>{
      console.log(data);
      this.monitorias = data;
    },error =>{
      console.error(error);
    })
  }

  setRow(id){
   
     // this.isCollapsed[id]=false;
    
  }

  click(id){
    this.isCollapsed[id] = !this.isCollapsed[id];
  }

  getValue(id){
    return this.isCollapsed[id];
  }
}
