import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ValidationMessageComponent } from './validation-message/validation-message.component';

/**
 * Módulo responsável por prover recursos para simplificar a validação de campos nos formulários do sistema.
 *
 * @author Squadra Tecnologia
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [ValidationMessageComponent],
  exports: [ValidationMessageComponent]
})
export class ValidationModule { }
