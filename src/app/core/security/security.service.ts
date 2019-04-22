import { Injectable, EventEmitter, Inject } from '@angular/core';

import { config, IConfig } from './config';
import { Credential, User } from './credential';

/**
 * Classe 'Credential'.
 *
 * @author Squadra Tecnologia
 */
@Injectable()
export class SecurityService {

    private _credential: Credential;

    private intervalId: any;

    public onRefresh: EventEmitter<string>;

    public onForbidden: EventEmitter<Credential>;

    public onUnauthorized: EventEmitter<Credential>;

    /**
     * Construtor da classe.
     * 
     * @param config 
     */
    constructor(@Inject(config) config: IConfig) {
        this._credential = new Credential(config);
        this.onRefresh = new EventEmitter<string>();
        this.onForbidden = new EventEmitter<Credential>();
        this.onUnauthorized = new EventEmitter<Credential>();
    }

    /**
     * Init security service.
     * 
     * @param user 
     */
    public init(user?: User): void {
        this.credential.init(user);

        if (user !== undefined) {
            // Refresh interval invoke event.
            let expiresIn = (user.expireIn - 60) * 1000;

            this.intervalId = setInterval(() => {
                clearInterval(this.intervalId);
                this.onRefresh.emit(this._credential.refreshToken);
            }, expiresIn);
        } else {

            // Invoke event refresh.
            if (this.isValid()) {
                this.onRefresh.emit(this._credential.refreshToken);
            }
        }
    }

    /**
     * Invalid user's credential.
     */
    public invalidate(): void {
        this._credential.clean();
        clearInterval(this.intervalId)
    }

    /**
     * Verifies that the user credential is valid.
     *
     * @returns boolean
     */
    public isValid(): boolean {
        return this._credential.user !== undefined;
    }

    /**
     * @returns credential
     */
    public get credential(): Credential {
        return this._credential;
    }
}