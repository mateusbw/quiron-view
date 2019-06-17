import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HistoricoPresencaComponent } from './historico-presenca/historico-presenca.component';
import { MonitorGuard } from '../service/guards/monitor.guard';
import { CoordenacaoGuard } from '../service/guards/coordenacao.guard';
import { ProfessorGuard } from '../service/guards/professor.guard';
import { ProfessorCoordenacaoGuard } from '../service/guards/professor-coordenacao.guard';

/**
 * Configuração de 'Rotas' do módulo 'Home'.
 * 
 * @author Squadra Tecnologia
 */
export const HomeRoutes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'aluno', loadChildren: '../app/aluno/aluno.module#AlunoModule',canActivate: [MonitorGuard]
      },
      {
        path: 'monitoria', loadChildren: '../app/monitoria/monitoria.module#MonitoriaModule'
      },
      {
        path: 'diario', loadChildren: '../app/diario/diario.module#DiarioModule', canActivate: [MonitorGuard]

      },
      {
        path: 'historico-presenca', component: HistoricoPresencaComponent, canActivate: [ProfessorCoordenacaoGuard] // CORDENACAO, CORDENADOR E PROFESSOR
      }
    ],
  }
];