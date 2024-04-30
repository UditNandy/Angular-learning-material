import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
})
export class DependencyInjectionComponent implements OnInit {
  constructor(public demo: DemoService) {}

  ngOnInit(): void {}

  callDemoMethod = () => {
    console.log('Called');
    this.demo.demoMethod();
  };

  incrementCount = () => {
    this.demo.incrementCount();
  };

  callLogger() {
    this.demo.callLoggerMethod();
  }
}
