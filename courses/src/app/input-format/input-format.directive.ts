import { Directive, HostListener, ElementRef, Input } from '@angular/core';
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
    let format: string = this.format ? this.format.toLocaleLowerCase() : null;
    if(format) {
      console.log('change');
      let value: string = this.el.nativeElement.value;
      if (format === 'lowercase')
        this.el.nativeElement.value = value.toLocaleLowerCase();
      else
        this.el.nativeElement.value = value.toLocaleUpperCase();
    } else {
      console.log('change : format not defined. change will not apply');
    }
  }
  @Input('format') format: string;
}
