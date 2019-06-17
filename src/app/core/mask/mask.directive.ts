import { Directive, AfterViewInit, ElementRef, Input, forwardRef, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MaskPipe } from './mask.pipe';

declare var jQuery: any;

/**
 * Class 'Directive' responsável por prover as máscaras em tags '<input>' utilizando a biblioteca javascript 'jQuery Mask Input'.
 *
 */
@Directive({
  selector: 'input[inputMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaskDirective),
      multi: true
    }
  ]
})
export class MaskDirective implements AfterViewInit, ControlValueAccessor {

  private maskPipe: MaskPipe = new MaskPipe();

  private onModelTouched: () => void = () => { };
  private onModelChange: (_: any) => void = () => { };

  @Input('inputMask') pattern: string;
  @Input('maskAfterChange') maskAfterChange: boolean = false;

  @HostBinding('attr.maxlength') get maxlength(): string {
    return this.pattern !== undefined ? this.pattern.length.toString() : '';
  }

  @HostListener('change') onHostChange() {
    let elementJQuery = jQuery(this.element.nativeElement);
    let value = this.getValue(elementJQuery);
    this.writeValue(value);
    this.changeValue(elementJQuery);
  }

  @HostListener('keyup') onHostKeyup() {
    let elementJQuery = jQuery(this.element.nativeElement);
    this.changeValue(elementJQuery);
  }

  /**
   * Construtor da classe.
   *
   * @param element
   */
  constructor(private element: ElementRef) { }

  /**
   * Inicializa as dependências da 'Directive', após o carregamento da DOM.
   */
  ngAfterViewInit(): void {
    if (this.pattern !== undefined) {
      let elementJQuery = jQuery(this.element.nativeElement);

      if (!this.maskAfterChange) {
        elementJQuery.mask(this.pattern);
      }
    }
  }

  /**
   * Salva o valor considerando o ciclo de vida do ngModel.
   *
   * @param elementJQuery
   */
  private changeValue(elementJQuery: any) {
    let value = this.getValue(elementJQuery);
    this.onModelChange(value);
  }

  /**
   * Retorna o valor informado no campo sem a mascara.
   *
   * @param elementJQuery
   */
  private getValue(elementJQuery: any): any {
    let value = elementJQuery.val().replace(/\D/g, '');
    return value.trim().length === 0 ? undefined : value;
  }

  /**
   * @param value
   */
  writeValue(value: any): void {
    let inputValue = this.maskPipe.transform(value, this.pattern);
    jQuery(this.element.nativeElement).val(inputValue);
  }

  /**
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  /**
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  /**
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
    jQuery(this.element.nativeElement).prop('disabled', isDisabled);
  }

}