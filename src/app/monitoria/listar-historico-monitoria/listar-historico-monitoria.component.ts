import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-historico-monitoria',
  templateUrl: './listar-historico-monitoria.component.html',
  styleUrls: ['./listar-historico-monitoria.component.sass']
})
export class ListarHistoricoMonitoriaComponent implements OnInit {
  public isCollapsed = [];
  constructor() { }

  ngOnInit() {
  }

  setRow(id){
   this.isCollapsed[id]=false;
  }

  click(id){
   this.isCollapsed[id] = !this.isCollapsed[id];
  }

  getValue(id){
   return this.isCollapsed[id];
  }

}
