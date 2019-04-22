import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SecurityGuard } from '../core/security/security.guard'

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
        path: 'aluno', loadChildren: '../app/aluno/aluno.module#AlunoModule'
      }
    ]

  }
];