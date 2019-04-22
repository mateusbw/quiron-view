import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MessageService } from './message.service';
import { InternacionalizacaoPipe } from './internacionalizacao.pipe';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ConfirmMessageComponent } from './confirm-message/confirm-message.component';

/**
 * Módulo responsável por prover recursos de 'mensagens' e 'i18n'.
 *
 * @author Squadra Tecnologia
 */
@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    InternacionalizacaoPipe,
    AlertMessageComponent,
    ConfirmMessageComponent
  ],
  exports: [
    InternacionalizacaoPipe,
    AlertMessageComponent,
    ConfirmMessageComponent
  ]
})
export class MessageModule {

  /**
   * Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessageModule,
      providers: [
        MessageService,
        InternacionalizacaoPipe
      ]
    }
  }
}
