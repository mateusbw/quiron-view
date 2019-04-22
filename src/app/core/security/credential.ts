import { IConfig } from './config';

/**
 * Interface com a representação de 'Usuário'.
 * 
 * @author Squadra Tecnologia
 */
export interface User {
  id: number;
  name: string;
  accessToken: string;
  refreshToken: string;
  expireIn: number;
}

/**
 * Classe 'Credential'.
 *
 * @author Squadra Tecnologia
 */
export class Credential {

  private _user: User;

  /**
   * Construtor da classe.
   * 
   * @param config 
   */
  constructor(private config: IConfig) { }

  /**
   * Init credential.
   * 
   * @param user 
   */
  public init(user?: User): void {
    this._user = user;

    if (this._user !== undefined) {
      let data = JSON.stringify(this._user);
      localStorage.setItem(this.config.nameStorage, btoa(data));
    } else {
      let data = localStorage.getItem(this.config.nameStorage);

      if (data !== undefined && data !== null) {
        data = atob(data);
        this._user = JSON.parse(data);
      }
    }
  }

  /**
   * Clean _user's credential.
   */
  public clean(): void {
    this._user = undefined;
    localStorage.removeItem(this.config.nameStorage);
  }

  /**
   * @returns user
   */
  public get user(): User {
    return this._user;
  }

  /**
   * @returns userName
   */
  public get userName(): string {
    return this._user ? this._user.name : undefined;
  }

  /**
   * @returns accessToken
   */
  public get accessToken(): string {
    return this._user ? this._user.accessToken : undefined;
  }

  /**
   * @returns refreshToken
   */
  public get refreshToken(): string {
    return this._user ? this._user.refreshToken : undefined;
  }
}