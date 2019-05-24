import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncluirMonitoriaComponent } from './incluir-monitoria/incluir-monitoria.component';
import { ListarMonitoriaComponent } from './listar-monitoria/listar-monitoria.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../core/message/message.module';
import { ValidationModule } from '../core/validation/validation.module';
import { PipesModule } from '../core/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { MonitoriaRoutes } from './monitoria.router';
import { AlterarMonitoriaComponent } from './alterar-monitoria/alterar-monitoria.component';
import { ExcluirMonitoriaComponent } from './excluir-monitoria/excluir-monitoria.component';
import { ListarAtivasMonitoriaComponent } from './listar-ativas-monitoria/listar-ativas-monitoria.component';
import { ListarHistoricoMonitoriaComponent } from './listar-historico-monitoria/listar-historico-monitoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [IncluirMonitoriaComponent, ListarMonitoriaComponent, AlterarMonitoriaComponent, ExcluirMonitoriaComponent, ListarAtivasMonitoriaComponent, ListarHistoricoMonitoriaComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    MessageModule,
    ValidationModule,
    RouterModule.forChild(MonitoriaRoutes),
    PipesModule
  ]
})
export class MonitoriaModule { }
