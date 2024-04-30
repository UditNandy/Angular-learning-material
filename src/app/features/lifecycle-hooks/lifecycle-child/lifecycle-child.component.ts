import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css'],
})
export class LifecycleChildComponent implements OnInit {
  constructor() {}

  @Input() sampleData: string = 'Hello';
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(change: SimpleChange) {
    console.log('ngOnChanges ', change);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('On after content init');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('after view init');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
