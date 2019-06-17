import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service'

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
export class HomeComponent implements OnInit {
  public usuario;
  public rota;
  public acessos;
  public acessoRotas;

  constructor(private authService: AuthService,
    private router: Router) { 
    }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    console.log(this.usuario)
    if (this.usuario.papel.id === 1) {
      this.acessos = ["ativas"];
    } else
      if (this.usuario.papel.id === 2) {
        this.acessos = ["preenche_diario", "alunos"];
      } else
        if (this.usuario.papel.id === 3) {
          this.acessos = ["monitoria_realizada", "ativas"];
        } else
          if (this.usuario.papel.id === 4) {
            this.acessos = ["monitoria_realizada", "ativas", "historico"];
          } else
            if (this.usuario.papel.id === 5) {
              this.acessos = ["monitoria", "historico"];
            }
  }

  verificaAcessos(acesso) {
    for (let a of this.acessos) {
      if (a == acesso) {
        return true;
      }
    }
    return false;
  }

  public sair() {
    this.authService.sair();
  }

}