import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


/**
 * Classe responsável por prover a integração entre o endpoint de Aluno.
 *
 */
@Injectable({
    providedIn: 'root'
})
export class AuthService {
  
    public loginSession;
    /**
     * Construtor da classe.
     *
     * @param http
     */
    constructor(private http: HttpClient) { 
    }

    public login(user: any): Observable<any> {
        return  this.http.post(`${environment.urlLogin}realizaLogin`, user);
       
    }

    public getSession(): Object{
        return this.loginSession;
    }

    public setSession(data: any) {
        this.loginSession = data;
      }
}