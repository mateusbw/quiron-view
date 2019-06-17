import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class ProfessorCoordenacaoGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){};

    canActivate(): boolean {
        let acesso = (this.authService.isProfessor() || this.authService.isCoordenacao()|| this.authService.isCoordenador());

        if(!acesso){
            this.router.navigate(['/acesso'])
        }
       return acesso;
    };
}