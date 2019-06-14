import { Router, NavigationEnd  } from '@angular/router';
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
    public rota;
    public acessos;
    public acessoRotas;

    constructor(private authService: AuthService,
                private router: Router){}

    ngOnInit(){
      this.usuario ={
        nome : null,
        papel:{

        }
      }

      this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) { 
          /* Your code goes here on every router change */
          this.rota = this.router.url;
          
        }
      });
      

      this.usuario = this.authService.getUser();
      
      console.log(this.usuario.role);
      if(this.usuario.role == "Aluno"){
        this.acessos = ["ativas"];
      }
      if(this.usuario.role == "Monitor"){
        this.acessos = ["preenche_diario", "alunos"];
      }
      console.log(this.acessos);
      console.log(this.usuario);

    }

    verificaAcessos(acesso){
      console.log(acesso)
      for(let a of this.acessos){
        console.log(a);
        if (a == acesso){
          console.log("Ok")
          return true;
        }
      }
      return false;
    }

    public sair(){
      this.authService.sair();
    }

}