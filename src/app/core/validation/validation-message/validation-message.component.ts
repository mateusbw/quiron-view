import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ValidationResourceProvider, ValidationResource } from '../validation.resource'

/**
 * Component responsável por prover o recurso de visualização de mensagem de validação, sendo capaz de detectar o erro e a mensagem a ser apresentada.
 */
@Component({
  selector: 'validation-message',
  template: '<span *ngIf="for.touched || form.submitted"><p class="validation-invalid" *ngFor="let error of errors()" >{{error}}</p></span>',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() for: FormControl;

  private validationResource: ValidationResource;

  /**
   * Construtor da classe.
   *
   * @param ValidationResource
   */
  constructor() {
    
  }

  /**
   * Inicializa as dependências do Component.
   */
  ngOnInit(): void {
    this.for.valueChanges.subscribe(value => this.removerEspacosString(value));
  }

  /**
   * Remove os espaços em branco caso seja identificado que 'string' está vazia.
   *
   * @param value
   */
  private removerEspacosString(value: any): void {
    if (value !== undefined && typeof value === "string" && value.trim().length == 0) {
      this.for.reset({ value: undefined, disabled: false });
    }
  }

  /**
   * Retorna a mensagem conforme o erro detectado.
   */
  public errors(): string[] {
    let errors = [];

    if (this.for.errors !== null) {
      for (let error of Object.keys(this.for.errors)) {
        if (this.for.hasError(error)) {
          let message = "Campo de preenchimento obrigatório."

          if (message === undefined) {
            message = error;
          }
          errors.push(message);
        }
      }
    }
    return errors;
  }
}
