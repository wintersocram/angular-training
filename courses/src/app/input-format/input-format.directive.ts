import { Directive, HostListener, ElementRef } from '@angular/core';
// check all HostListener Events at (*)
// https://github.com/angular/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L78

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    console.log('blur');
  }
  @HostListener('change') onChange() {
    console.log('change');
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLocaleUpperCase();
  }
}
