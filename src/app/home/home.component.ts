import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AuthService, Papeis } from 'src/app/service/auth.service'

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
  public itensMenu: any[];

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.itensMenu = this.getItensMenu(this.usuario.papel.id);
  }


  private getItensMenu(idPapel) {
    if (idPapel === Papeis.ALUNO) {
      return [
        { rota: '/monitoria/listar-ativas', icon: 'fa-check-square', nome: 'Monitorias Ativas' }
      ]
    }

    if (idPapel === Papeis.MONITOR) {
      return [
        { rota: '/aluno', icon: 'fa-users', nome: 'Alunos' },
        { rota: '/diario', icon: 'fa-book', nome: 'Diário' },
        { rota: '/monitoria/listar-ativas', icon: 'fa-check-square', nome: 'Monitorias Ativas' },
      ]
    }

    if (idPapel === Papeis.PROFESSOR || idPapel === Papeis.COORDENADOR) {
      return [
        { rota: '/monitoria/listar-historico', icon: 'fa-history', nome: 'Monitorias Realizadas' },
        { rota: '/historico-presenca', icon: 'fa-calendar-check', nome: 'Histórico de Presenças' }
      ]
    }

    if (idPapel === Papeis.COORDENACAO) {
      return [
        { rota: '/monitoria', icon: 'fa-briefcase', nome: 'Monitoria' },
        { rota: '/historico-presenca', icon: 'fa-calendar-check', nome: 'Histórico de Presenças' }
      ]
    }
  }


  public sair() {
    this.authService.sair();
  }

}