import { Component, OnInit } from '@angular/core';
import { MonitoriaService } from 'src/app/service/monitoria.service';
import { Router } from '@angular/router';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-listar-historico-monitoria',
  templateUrl: './listar-historico-monitoria.component.html',
  styleUrls: ['./listar-historico-monitoria.component.sass']
})
export class ListarHistoricoMonitoriaComponent implements OnInit {
  public isCollapsed = [];
  public aux = false;
  public listaMonitorias = [];
  public listaSemestres = [];
  constructor(private router: Router,
              private monitoriaService: MonitoriaService, ) { }

  ngOnInit() {
    this.monitoriaService.buscarMonitoriasComDiario().subscribe(data=>{
      this.listaMonitorias = data;
      console.log(this.listaMonitorias);
      for(let mon of this.listaMonitorias){
        this.aux = false;
        if(this.listaSemestres.length == 0){
          this.listaSemestres.push(mon.semestre);
        }
        else{
          var aux = 0;
          for(let sem of this.listaSemestres){
            if(sem == mon.semestre){
              aux = 1;
              break;
            }
          }
          if(aux == 0){
            this.listaSemestres.push(mon.semestre);
          }
        }
        
      }
  
      console.log(this.listaSemestres);
    }, error =>{
      console.error(error);
    });

   
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

  // buscarDetalhes(id){
  //   this.router.navigate(['/monitoria/detalhar-monitoria/'+id]);
  // }
}
