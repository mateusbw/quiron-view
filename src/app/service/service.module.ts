import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AlunoService } from './aluno.service';
import { CursoService } from './curso.service';
import { MessageModule } from '../core/message/message.module';
import { AuthService } from './auth.service';

/**
 * Modulo de integração com a API Rest.
 */
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MessageModule
  ],
  declarations: []
})
export class ServiceModule {

  /**
     * Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        AlunoService,
        CursoService,
        AuthService
      ]
    }
  }

}