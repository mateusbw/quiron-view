import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


/**
 * Classe responsável por prover a integração entre o endpoint de Aluno.
 *
 */
@Injectable()
export class AlunoService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
  * Retorna a lista de Alunos de acordo com o filtro informado.
  */
  public listarAlunosPorFiltro(filtro: any): Observable<any> {
    let params: String = "todos=" + filtro.todos;
    if (filtro.nome) {
      params = params.concat("&nome=" + filtro.nome)
    }
    if (filtro.idCurso) {
      params = params.concat("&idCurso=" + filtro.idCurso)
    }
    return this.http.get(`${environment.urlAluno}listar?${params}`);
  }

   /**
  * Retorna a lista de Alunos.
  */
 public listarAlunos(): Observable<any> {
  return this.http.get(`${environment.urlAluno}listar?todos=true`);
}

  /**
   * Inseri um aluno.
   */
  public incluirAluno(aluno: any): Observable<any> {
    return this.http.post(`${environment.urlAluno}`, aluno);
  }

  /**
 * Busca aluno conforme o Id informado.
 */
  public buscarAluno(idAluno: any): Observable<any> {
    return this.http.get(`${environment.urlAluno}${idAluno}`);
  }

    /**
 * Busca aluno conforme o Id informado.
 */
public listarAlunoPorNome(nome: string): Observable<any> {
  return this.http.get(`${environment.urlAluno}listar?nome=${nome}`);
}

  /**
* Busca aluno conforme o Id informado.
*/
  public excluirAluno(idAluno: any): Observable<any> {
    return this.http.delete(`${environment.urlAluno}${idAluno}`);
  }

  public listarAlunoPorMonitor(idMonitor: any): Observable<any> {
    return this.http.get(`${environment.urlAluno}monitor/${idMonitor}`);
  }
  
}