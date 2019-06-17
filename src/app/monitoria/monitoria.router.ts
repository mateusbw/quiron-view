
import { AlterarMonitoriaComponent } from './alterar-monitoria/alterar-monitoria.component';
import { IncluirMonitoriaComponent } from './incluir-monitoria/incluir-monitoria.component';

import { Routes } from '@angular/router';

import { SecurityGuard } from '../core/security/security.guard';
import { ListarMonitoriaComponent } from './listar-monitoria/listar-monitoria.component';
import { ExcluirMonitoriaComponent } from './excluir-monitoria/excluir-monitoria.component';
import { ListarAtivasMonitoriaComponent } from './listar-ativas-monitoria/listar-ativas-monitoria.component';
import { ListarHistoricoMonitoriaComponent } from './listar-historico-monitoria/listar-historico-monitoria.component';
import { ListarAtivasDetalheMonitoriaComponent } from './listar-ativas-monitoria/listar-ativas-detalhe-monitoria.component';
import { DetalharMonitoriaComponent } from './detalhar-monitoria/detalhar-monitoria.component';
import { CoordenacaoGuard } from '../service/guards/coordenacao.guard';
import { ProfessorGuard } from '../service/guards/professor.guard';
import { AlunoMonitorGuard } from '../service/guards/aluno-monitor.guard';

/**
 * Configuração de 'Rotas' do módulo 'Monitoria'.
 *
 * @author Squadra Tecnologia
 */
export const MonitoriaRoutes: Routes = [
    {
        path: 'listar',
        component: ListarMonitoriaComponent, canActivate: [CoordenacaoGuard]//CORDENACAO
    },
    {
        path: 'listar-ativas',
        component: ListarAtivasMonitoriaComponent, canActivate: [AlunoMonitorGuard]// ALUNO E MONITOR
    },
    {
        path: 'listar-historico',
        component: ListarHistoricoMonitoriaComponent, canActivate: [ProfessorGuard] //PROFESSOR
    },
    {
        path: 'detalhar-monitoria/:id',
        component: DetalharMonitoriaComponent,canActivate: [ProfessorGuard]//PROFESSOR
    },
    {
        path: 'incluir',
        component: IncluirMonitoriaComponent,canActivate: [CoordenacaoGuard]// CORDENACAO 
    },
    {
        path: 'alterar/:id',
        component: AlterarMonitoriaComponent,canActivate: [CoordenacaoGuard]// CORDENACAO
    },
    {
        path: 'excluir/:id',
        component: ExcluirMonitoriaComponent,canActivate: [CoordenacaoGuard]// CORDENACAO
    },
    {
        path: 'listar-ativas-detalhe/:id',
        component: ListarAtivasDetalheMonitoriaComponent,canActivate: [AlunoMonitorGuard]//ALUNO E MONITOR
    },
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    }
];