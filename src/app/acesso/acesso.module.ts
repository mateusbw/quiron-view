import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoComponent } from './acesso.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';
import { RecuperarSenhaComponent } from '../recuperar-senha/recuperar-senha.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../core/message/message.module';
import { ValidationModule } from '../core/validation/validation.module';

@NgModule({
  declarations: [
    AcessoComponent,
    LoginComponent,
    RecuperarSenhaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    MessageModule,
    ValidationModule,
  ]
})
export class AcessoModule { }
