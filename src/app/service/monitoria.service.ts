import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


/**
 * Classe responsável por prover a integração entre o endpoint de Monitoria.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class MonitoriaService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
  * Retorna a lista de Monitorias.
  */
  public listarMonitorias(): Observable<any> {
    return this.http.get(`${environment.urlMonitoria}`);
  }

  /**
  * Retorna a lista de Monitorias ativas
  */
  public listarMonitoriasAtivas(): Observable<any> {
    return this.http.get(`${environment.urlMonitoria}ativas`);
  }

  /**
   * Inseri um Monitoria.
   */
  public incluirMonitoria(Monitoria: any): Observable<any> {
    return this.http.post(`${environment.urlMonitoria}`, Monitoria);
  }

  /**
   * Atualiza um Monitoria.
   */
  public atualizaMonitoria(Monitoria: any): Observable<any> {
    return this.http.put(`${environment.urlMonitoria}`, Monitoria);
  }

  /**
 * Busca Monitoria conforme o Id informado.
 */
  public buscarMonitoria(idMonitoria: any): Observable<any> {
    return this.http.get(`${environment.urlMonitoria}${idMonitoria}`);
  }

  /**
 * Busca Monitoria conforme o Id do Monitor.
 */
public buscarMonitoriaPorMonitor(idMonitor: any): Observable<any> {
  return this.http.get(`${environment.urlMonitoria}monitor/${idMonitor}`);
}

  /**
* Deleta Monitoria conforme o Id informado.
*/
  public excluirMonitoria(idMonitoria: any): Observable<any> {
    return this.http.delete(`${environment.urlMonitoria}${idMonitoria}`);
  }

  /* Busca a lista de alunos que já estiveram presentes em uma monitoria */
  public buscarAlunosByMonitoria(idMonitoria: any): Observable<any>{
    return this.http.get(`${environment.urlMonitoria}alunoByMonitoria/${idMonitoria}`);
  }

  public buscarMonitoriasComDiario(): Observable<any>{
    return this.http.get(`${environment.urlMonitoria}monitoriasWithDiario`);
  }

  public buscarDetalhesMonitoria(idMonitoria: any): Observable<any>{
    return this.http.get(`${environment.urlMonitoria}detalhesMonitoria/${idMonitoria}`);
  }
}