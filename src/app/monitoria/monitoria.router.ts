import { AlterarMonitoriaComponent } from './alterar-monitoria/alterar-monitoria.component';
import { IncluirMonitoriaComponent } from './incluir-monitoria/incluir-monitoria.component';

import { Routes } from '@angular/router';

import { SecurityGuard } from '../core/security/security.guard';
import { ListarMonitoriaComponent } from './listar-monitoria/listar-monitoria.component';
import { ExcluirMonitoriaComponent } from './excluir-monitoria/excluir-monitoria.component';


/**
 * Configuração de 'Rotas' do módulo 'Monitoria'.
 *
 * @author Squadra Tecnologia
 */
export const MonitoriaRoutes: Routes = [
    {
        path: 'listar',
        component: ListarMonitoriaComponent
    },
    {
        path: 'incluir',
        component: IncluirMonitoriaComponent
    },
    {
        path: 'alterar/:id',
        component: AlterarMonitoriaComponent
    },
    {
        path: 'excluir/:id',
        component: ExcluirMonitoriaComponent
    },
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    }
];