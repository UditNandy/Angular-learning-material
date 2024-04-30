import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: '<app-dependency-child>',
  providers: [DemoService],
  template:
    '<div>Count from child is {{demoService.count}} </div><button (click)="incrementCount()"> Increment Count</button >',
})
export class DependencyInjectionChild {
  constructor(public demoService: DemoService) {}

  incrementCount = () => {
    this.demoService.incrementCount();
  };
}
