import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageResource, MessageResourceProvider } from './message.resource';

/**
 * Classe 'Pipe' para prover o recurso de 'i18n'.
 */
@Pipe({
  name: 'i18n'
})
export class InternacionalizacaoPipe implements PipeTransform {

  private messageResource: MessageResource;

  /**
   * Construtor da classe.
   *
   * @param MessageResource
   */
  constructor(MessageResource: MessageResourceProvider) {
    this.messageResource = new MessageResource();
  }

  /**
   * Retorna a descrição conforme a chave informada.
   *
   * @param chave
   * @param params
   */
  transform(chave: string, params: any): string {
    let description = this.messageResource.getDescription(chave);

    if (description !== undefined && params !== undefined) {

      if (typeof params === 'string') {
        description = description.replace(new RegExp('\\{0}', 'g'), params);

      } else {
        for (var index = 0; index < params.length; index++) {
          description = description.replace(new RegExp('\\{' + index + '\\}', 'g'), params[index]);
        }
      }
    }
    return description;
  }

}
