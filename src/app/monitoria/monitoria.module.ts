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

@NgModule({
  declarations: [IncluirMonitoriaComponent, ListarMonitoriaComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessageModule,
    ValidationModule,
    RouterModule.forChild(MonitoriaRoutes),
    PipesModule
  ]
})
export class MonitoriaModule { }
