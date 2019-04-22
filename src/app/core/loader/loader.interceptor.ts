import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';

import { LoaderService } from './loader.service';

/**
 * Implementação responsável por interceptar as requisições Http.
 */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    /**
     * Construtor da classe.
     * 
     * @param loaderService 
     */
    constructor(private loaderService: LoaderService) { }

    /**
     * Método responsável por interceptar a requisição Http.
     * 
     * @param request 
     * @param next 
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.onStart.emit();

        return next.handle(request).pipe(finalize(() => {
            this.loaderService.onStop.emit();
        }));
    }
}