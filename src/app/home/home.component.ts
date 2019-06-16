import { Router, NavigationEnd  } from '@angular/router';
import { Component } from '@angular/core';

import {AuthService} from 'src/app/service/auth.service'
import { SecurityService } from '../core/security/security.service';
import { MessageService } from '../core/message/message.service'
import { not } from '@angular/compiler/src/output/output_ast';

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
          
          if (!this.verificaAcessosRota()) {            
            //this.router.navigate(['/']);
          }       
        }
      });
      

      this.usuario = this.authService.getUser();
      
      console.log(this.usuario.role);
      if(this.usuario.role == "Aluno"){
        this.acessos = ["ativas"];
      }else
      if(this.usuario.role == "Monitor"){
        this.acessos = ["preenche_diario", "alunos"];
      }else
      if(this.usuario.role == "Professor"){
        this.acessos = ["monitoria_realizada", "ativas"];
      }else
      if(this.usuario.role == "Coordenador"){
        this.acessos = ["monitoria_realizada", "ativas","historico"];
      }else
      if(this.usuario.role == "Coordenação"){
        this.acessos = ["monitoria","historico"];
      }
      console.log(this.acessos);
      console.log(this.usuario);

      //rotas por role
      if(this.usuario.role == "Aluno"){
        this.acessos = ["/monitoria/listar-ativas"];
      }else
      if(this.usuario.role == "Monitor"){
        this.acessos = ["preenche_diario", "alunos","ativas"];
      }else
      if(this.usuario.role == "Professor"){
        this.acessos = ["monitoria_realizada", "ativas"];
      }else
      if(this.usuario.role == "Coordenador"){
        this.acessos = ["monitoria_realizada", "ativas","historico"];
      }else
      if(this.usuario.role == "Coordenação"){
        this.acessos = ["monitoria","historico"];
      }

    }

    verificaAcessos(acesso){
      for(let a of this.acessos){
        if (a == acesso){
          return true;
        }
      }
      return false;
    }

    verificaAcessosRota(){
      for(let a of this.acessoRotas){
        if (a == this.rota){
          return true;
        }
      }
      return false;
    }

    public sair(){
      this.authService.sair();
    }

}