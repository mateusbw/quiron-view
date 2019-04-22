import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SecurityService } from './security.service';
import { config, IConfig } from './config';

/**
 * Implementação que garante a segurança das rotas permitindo o acesso apenas se o 'Usuário' estiver autenticado na aplicação e possuir os papéis necessários para o acessar.
 *
 * @author Squadra Tecnologia
 */
@Injectable()
export class SecurityGuard implements CanActivate {

    /**
     * Construtor da classe.
     * 
     * @param router 
     * @param securityService 
     * @param config 
     */
    constructor(private router: Router, private securityService: SecurityService, @Inject(config) private config: IConfig) { }

    /**
     * Inercepta a rota e verifica se a mesma poderá ou não ser apresentada.
     *
     * @param next
     * @param state
     */
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let acesso = this.securityService.isValid();

        if (!acesso) {
            this.router.navigate([this.config.loginRouter]);
        }
        return acesso;
    }

}
