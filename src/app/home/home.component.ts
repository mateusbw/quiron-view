import { Router } from '@angular/router';
import { Component } from '@angular/core';

import {AuthService} from 'src/app/service/auth.service'
import { SecurityService } from '../core/security/security.service';
import { MessageService } from '../core/message/message.service'

/**
 * Implementação do component 'Home' responsável por prover o template padrão da aplicação.
 *
 * @author Squadra Tecnologia
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [
    "home.component.scss"
  ]
})
export class HomeComponent {
    public usuario;

    constructor(private authService: AuthService){}

    ngOnInit(){
      this.usuario ={
        nome : null,
        papel:{

        }
      }

      this.usuario = this.authService.getUser();
      console.log(this.usuario);

    }

    public sair(){
      this.authService.sair();
    }

}