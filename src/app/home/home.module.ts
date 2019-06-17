import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { ValidationModule } from '../core/validation/validation.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker/';
import { HistoricoPresencaComponent } from './historico-presenca/historico-presenca.component';
import { MaskModule } from '../core/mask/mask.module';

@NgModule({
  declarations: [
    HomeComponent,
    HistoricoPresencaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    ValidationModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class HomeModule { }
