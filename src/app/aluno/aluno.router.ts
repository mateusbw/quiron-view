
import { Routes } from '@angular/router';

import { SecurityGuard } from '../core/security/security.guard';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { IncluirAlunoComponent } from './incluir-aluno/incluir-aluno.component';
import { AlterarAlunoComponent } from './alterar-aluno/alterar-aluno.component';
import { ExcluirAlunoComponent } from './excluir-aluno/excluir-aluno.component';


/**
 * Configuração de 'Rotas' do módulo 'Pessoa'.
 *
 * @author Squadra Tecnologia
 */
export const AlunoRoutes: Routes = [
    {
        path: 'listar',
        component: ListarAlunoComponent
    },
    {
        path: 'incluir',
        component: IncluirAlunoComponent
    },
    {
        path: 'alterar/:id',
        component: AlterarAlunoComponent
    },
    {
        path: 'excluir/:id',
        component: ExcluirAlunoComponent
    },
    {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
    }
];