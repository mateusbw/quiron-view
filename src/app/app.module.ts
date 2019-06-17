
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting } from './app.router';
import { AppMessage } from './app.message';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AcessoModule } from './acesso/acesso.module';
import { ServiceModule } from './service/service.module';
import { LoaderModule } from './core/loader/loader.module';
import { MessageModule } from './core/message/message.module';
import { ValidationModule } from './core/validation/validation.module';
import { MessageResourceProvider } from './core/message/message.resource';
import { ValidationResourceProvider } from './core/validation/validation.resource';
import { AlunoGuard } from './service/guards/aluno.guard';
import { MonitorGuard } from './service/guards/monitor.guard';
import { ProfessorGuard } from './service/guards/professor.guard';
import { CoordenacaoGuard } from './service/guards/coordenacao.guard';
import { AlunoMonitorGuard } from './service/guards/aluno-monitor.guard';
import { ProfessorCoordenacaoGuard } from './service/guards/professor-coordenacao.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting, 
    HomeModule,
    LoaderModule,
    AcessoModule,
    ValidationModule,
    MessageModule.forRoot(),
    BrowserModule,
    ServiceModule.forRoot(),
    BrowserAnimationsModule,
    LoaderModule
  ],
  providers: [
    AlunoGuard,MonitorGuard,ProfessorGuard,CoordenacaoGuard, AlunoMonitorGuard,ProfessorCoordenacaoGuard,
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    {
      provide: MessageResourceProvider,
      useValue: AppMessage,
    },
    {
      provide: ValidationResourceProvider,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
