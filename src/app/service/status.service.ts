import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


/**
 * Classe responsável por prover a integração entre o endpoint de Status.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

   /**
   * Retorna a lista de Status.
   */
  public listarStatus(): Observable<any> {
    return this.http.get(`${environment.urlStatus}`);
  }

}