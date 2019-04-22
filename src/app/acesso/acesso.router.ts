import { Routes } from '@angular/router';
import { AcessoComponent } from './acesso.component';
import { LoginComponent } from '../login/login.component';
import { RecuperarSenhaComponent } from '../recuperar-senha/recuperar-senha.component';

/**
 * Configuração de 'Rotas' do módulo 'Acesso'.
 *
 * @author Squadra Tecnologia
 */
export const AcessoRoutes: Routes = [
  {
    path: 'acesso',
    component: AcessoComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent
      }
    ]
  }

];