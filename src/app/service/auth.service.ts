import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MessageService } from '../core/message/message.service';


@Injectable()
export class AuthService {
  
    public loginSession;
    public token;
    /**
     * Construtor da classe.
     *
     * @param http
     */
    constructor(private http: HttpClient, private route:Router, private messageService: MessageService) { 
    }

    public login(user: any) {
        return  this.http.post(`${environment.urlLogin}realizaLogin`, user).subscribe(data=>{

            localStorage.setItem('user', this.hashToken(data));
            this.route.navigate(['/']);

        },error =>{
            console.log("Erro: ",error)
            if(error.status == 500){
                this.messageService.addMsgDanger(error.error.message);
            }else{
                this.messageService.addMsgDanger("MSG_FALHA_CONEXAO");
            }
        });
       
    }

    public getSession(): Object{
        return this.loginSession;
    }

    public setSession(data: any) {
        this.loginSession = data;
      }

    public getUser(){
        this.token = localStorage.getItem('user');
        let array = this.token.split("##")
        let user = {
            id: array[0],
            nome: array[1],
            idPapel: array[2],
            role: array[3],
        }                           
        return user;
    }

      public autenticado():boolean{
          if(this.token === undefined && localStorage.getItem('user') != null){
              this.token = localStorage.getItem('user');                       
          }

          if(this.token === undefined){
            this.route.navigate(['/acesso']);
          }

          return this.token !== undefined;
      }

      public sair(){
          localStorage.removeItem('user');
          this.route.navigate(['/acesso']);
      }

      private hashToken(user: any):string{
          return user.id+'##'+user.nome+'##'+user.papel.id+'##'+user.papel.role;
      }
}