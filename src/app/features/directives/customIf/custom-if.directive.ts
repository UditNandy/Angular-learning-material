import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  @Input() set customIf(condition: boolean) {
    if (condition) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
}
