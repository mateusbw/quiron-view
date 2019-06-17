
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AlunoGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){};

    canActivate(): boolean {
        let acesso = this.authService.isAluno();

        if(!acesso){
            this.router.navigate(['/acesso'])
        }
       return acesso;
    };
}