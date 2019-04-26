import { MonitoriaModule } from './monitoria/monitoria.module';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting } from './app.router';
import { AppMessage } from './app.message';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AcessoModule } from './acesso/acesso.module';
import { ServiceModule } from './service/service.module';
import { LoginComponent } from './login/login.component';
import { LoaderModule } from './core/loader/loader.module';
import { MessageModule } from './core/message/message.module';
import { ValidationModule } from './core/validation/validation.module';
import { MessageResourceProvider } from './core/message/message.resource';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { ValidationResourceProvider } from './core/validation/validation.resource';


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
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [
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
