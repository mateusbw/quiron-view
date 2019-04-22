import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppRouting } from './app.router';
import { HomeModule } from './home/home.module';
import { LoaderModule } from './core/loader/loader.module';
import { AcessoModule } from './acesso/acesso.module';
import { ValidationModule } from './core/validation/validation.module';
import { MessageModule } from './core/message/message.module';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { ServiceModule } from './service/service.module';
import { MessageResourceProvider } from './core/message/message.resource';
import { ValidationResourceProvider } from './core/validation/validation.resource';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarSenhaComponent
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
    AngularFontAwesomeModule
  ],
  providers: [  
  {
    provide: ValidationResourceProvider,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
