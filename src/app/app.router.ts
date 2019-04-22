import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/home.router';
import { AcessoRoutes } from './acesso/acesso.router';

/**
 * Configuração de 'Rotas' do módulo 'Principal' da aplicação.
 *
 * @author Squadra Tecnologia
 */
export const routes: Routes = [
  ...HomeRoutes,
  ...AcessoRoutes
];

// Exportação das rotas para o contexto da aplicação.
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);