
import { Routes } from '@angular/router';

import { SecurityGuard } from '../core/security/security.guard';
import { RegistrarDiarioComponent } from './registrar-diario/registrar-diario.component';


/**
 * Configuração de 'Rotas' do módulo 'Pessoa'.
 *
 * @author Squadra Tecnologia
 */
export const DiarioRoutes: Routes = [
    {
        path: '',
        component: RegistrarDiarioComponent
    }
];