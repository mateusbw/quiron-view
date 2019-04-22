import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


/**
 * Classe responsável por prover a integração entre o endpoint de Aluno.
 *
 */
@Injectable()
export class AuthService {

    /**
     * Construtor da classe.
     *
     * @param http
     */
    constructor(private http: HttpClient) { }

    public login(user: any): Observable<any> {
        return this.http.post(`${environment.urlLogin}realizaLogin`, user);
    }
}