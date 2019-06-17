import { Pipe, PipeTransform } from '@angular/core';

/**
 * Class 'Pipe' responsável por prover as máscaras geradas através da sequência de caracteres, conforme o padrão adotado pela biblioteca javascript 'jQuery Mask Input'.
 *
 */
@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  /**
   * Retorna o valor formatado conforme os parâmetros informados.
   *
   * @param value
   * @param pattern
   */
  transform(value: string, pattern: string): string {
    let formatted = '';

    if (value === undefined || value === null || pattern === undefined) {
      return formatted;
    }

    value = String(value);

    if (this.getCountDigits(pattern, true) > value.length) {
      return formatted;
    }

    let count = 0;
    let fixed = this.getCountDigits(pattern, true);
    let countOptional = value.length - fixed;

    for (let index = 0; index < pattern.length; index++) {

      if (pattern[index] === '0') {
        formatted += value[count++];
      } else if (pattern[index] === '9') {

        if (countOptional > 0) {
          formatted += value[count++];
          countOptional--;
        }
      } else {
        formatted += pattern[index];
      }
    }
    return formatted;
  }

  /**
   * Retorna o número de digitos da mascara informada.
   *
   * @param pattern
   * @param optional
   */
  private getCountDigits(pattern: string, ignoreOptional?: boolean): number {
    let value = pattern.replace(/\D/g, '');

    if (ignoreOptional) {
      value = value.replace(/\9/g, '');
    }
    return value.length;
  }

}
