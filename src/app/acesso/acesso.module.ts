import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoComponent } from './acesso.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AcessoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class AcessoModule { }
