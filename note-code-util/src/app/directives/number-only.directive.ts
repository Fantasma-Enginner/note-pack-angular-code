import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numberOnly]',
})
export class NumberOnlyDirective {
  constructor(private readonly elRef: ElementRef) {}
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const numberOnly = /[^0-9]*/g;
    const initalValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initalValue.replace(numberOnly, '');
    if (initalValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
