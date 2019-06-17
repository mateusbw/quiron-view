import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class MonitorGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){};

    canActivate(): boolean {
        let acesso = this.authService.isMonitor();

        if(!acesso){
            this.router.navigate(['/acesso'])
        }
       return acesso;
    };
}