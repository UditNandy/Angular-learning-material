import { Inject, Injectable } from '@angular/core';
import { ChildService } from './child.service';
import { CHILD_TOKEN } from '../app.module';

@Injectable({ providedIn: 'root' })
export class DemoService {
  public count = 0;
  constructor(@Inject(CHILD_TOKEN) private childService: any) {}
  demoMethod = () => {
    alert('Demo method called');
  };
  incrementCount() {
    this.count++;
  }
  callLoggerMethod() {
    this.childService.logger();
  }
}
