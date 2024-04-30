import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlighter]',
})
export class HighlighterDirective {
  @Input() backgroundColor: string = '#36454F';
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.element.nativeElement.style.color = 'white';
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.backgroundColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '6px');
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'Demo title'
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'highlight');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight');
  }
}
