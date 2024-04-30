import { Directive, ElementRef, HostListener, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Directive({
  selector: '[appDragAndDrop]',
})
export class DragAndDropDirective {
  constructor(private el: ElementRef) {}

  @HostListener('dragover', ['$event']) dragover(ev: Event) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  @HostListener('dragleave', ['$event']) dragleave(ev: Event) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  @HostListener('drop', ['$event']) drop(ev: any) {
    ev.stopPropagation();
    ev.preventDefault();
    console.log(ev.dataTransfer.files);
  }
}
