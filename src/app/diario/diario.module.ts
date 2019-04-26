import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarDiarioComponent } from './registrar-diario/registrar-diario.component';
import { DiarioRoutes } from './diario.router';
import { RouterModule } from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../core/message/message.module';
import { ValidationModule } from '../core/validation/validation.module';

@NgModule({
  declarations: [RegistrarDiarioComponent],
  imports: [
    BsDatepickerModule,
    CommonModule,
    FormsModule,
    MessageModule,
    ValidationModule,
    RouterModule.forChild(DiarioRoutes)

  ]
})
export class DiarioModule { }
