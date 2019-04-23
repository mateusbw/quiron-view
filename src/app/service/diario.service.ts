import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


/**
 * Classe responsável por prover a integração entre o endpoint de diário.
 *
 */
@Injectable()
export class DiarioService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

   /**
   * Efetua o registro de diário.
   */
  public registrarDiario(diario: any): Observable<any> {
    return this.http.post(`${environment.urlDiario}registro`, diario);
  }


}