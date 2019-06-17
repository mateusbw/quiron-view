import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MessageService } from '../core/message/message.service';
import { parseTemplate } from '@angular/compiler';

export enum Papeis {
    ALUNO= 1,
    MONITOR = 2,
    PROFESSOR = 3,
    COORDENADOR = 4,
    COORDENACAO = 5
}

@Injectable()
export class AuthService {


    public user;
    public token;
    /**
     * Construtor da classe.
     *
     * @param http
     */
    constructor(private http: HttpClient, private route: Router, private messageService: MessageService) {
    }

    public login(user: any) {
        return this.http.post(`${environment.urlLogin}realizaLogin`, user).subscribe(data => {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = "http://localhost:4200/"

        }, error => {
            console.log("Erro: ", error)
            if (error.status == 500) {
                this.messageService.addMsgDanger(error.error.message);
            } else {
                this.messageService.addMsgDanger("MSG_FALHA_CONEXAO");
            }
        });
    }

    loginAluno() {
        localStorage.setItem('user', JSON.stringify({nome:'Visitante', papel: {id: 1, role: 'Aluno'}}));
      }

    public getUser() {
        if (this.user === undefined && localStorage.getItem('user') != null) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        return this.user;
    }

    public isAluno(): boolean {
       return !!this.getUser() && this.getRole(this.getUser())===Papeis.ALUNO;
    }

    public isMonitor(): boolean {
        return !!this.getUser() && this.getRole(this.getUser())===Papeis.MONITOR;
     }

     public isProfessor(): boolean {
        return !!this.getUser() && this.getRole(this.getUser())===Papeis.PROFESSOR;
     }

     public isCoordenador(): boolean {
        return !!this.getUser() && this.getRole(this.getUser())===Papeis.COORDENADOR;
     }

     public isCoordenacao(): boolean {
        return !!this.getUser() && this.getRole(this.getUser())===Papeis.COORDENACAO;
     }

     public getRole(user:any){
        return user.papel.id
    }


    

    public sair() {
        localStorage.removeItem('user');
        this.route.navigate(['/acesso']);
    }

}