import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MessageService } from '../core/message/message.service';


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

        }, error => {
            console.log("Erro: ", error)
            if (error.status == 500) {
                this.messageService.addMsgDanger(error.error.message);
            } else {
                this.messageService.addMsgDanger("MSG_FALHA_CONEXAO");
            }
        });
    }

    public getUser() {
        if (this.user === undefined && localStorage.getItem('user') != null) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        return this.user;
    }

    public autenticado(): boolean {
       return !!this.getUser();
    }

    public sair() {
        localStorage.removeItem('user');
        this.route.navigate(['/acesso']);
    }

}