import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MessageModule } from '../core/message/message.module';
import { ValidationModule } from '../core/validation/validation.module';
import { AlunoRoutes } from './aluno.router';
import { IncluirAlunoComponent } from './incluir-aluno/incluir-aluno.component';
import { ExcluirAlunoComponent } from './excluir-aluno/excluir-aluno.component';
import { AlterarAlunoComponent } from './alterar-aluno/alterar-aluno.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';


@NgModule({
  declarations: [IncluirAlunoComponent, ExcluirAlunoComponent, AlterarAlunoComponent, ListarAlunoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessageModule,
    ValidationModule,
    RouterModule.forChild(AlunoRoutes)
  ]
})
export class AlunoModule { }
