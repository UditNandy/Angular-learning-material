import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  @Input() customIf!: boolean;

  ngOnChanges() {
    if (this.customIf) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
}
