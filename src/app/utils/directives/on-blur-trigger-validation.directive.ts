import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnBlurTriggerValidationDirective]',
  standalone: true
})
export class OnBlurTriggerValidationDirective {
  @Input({ required: true })
  format!: RegExp

  @Input({ required: true })
  errors!: Array<string>

  constructor(private element: ElementRef<HTMLInputElement>) { }

  @HostListener('focusout')
  validateOnBlurUsingRegExp(): void {
    const value = this.element.nativeElement.value;
    const isValid = value === null || value === undefined || value === '' || this.format.test(value);

    this.errors.length = 0;
    this.element.nativeElement.classList.remove('invalid');

    if(!isValid) {
      this.errors.push(`conteudo invalido ${value}`);
      this.element.nativeElement.classList.add('invalid');
      this.element.nativeElement.focus();
    }
  }
}
