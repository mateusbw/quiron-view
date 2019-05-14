
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
import { LoaderModule } from './core/loader/loader.module';
import { MessageModule } from './core/message/message.module';
import { ValidationModule } from './core/validation/validation.module';
import { MessageResourceProvider } from './core/message/message.resource';
import { ValidationResourceProvider } from './core/validation/validation.resource';
import { AuthGuard } from './service/auth.guard';


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
    AuthGuard,
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
