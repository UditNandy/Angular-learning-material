import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hostBindingExample]',
})
export class HostBindingExampleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('type') type: string = 'file';
}
