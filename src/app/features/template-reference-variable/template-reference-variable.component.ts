import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TemplateReferenceChildComponent } from './template-reference-child/template-reference-child.component';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css'],
})
export class TemplateReferenceVariableComponent implements OnInit {
  public inputRes!: string;

  @ViewChild(TemplateReferenceChildComponent)
  childVariable!: TemplateReferenceChildComponent;
  @ViewChild('templateInput') inputTemplate!: ElementRef;
  @ViewChildren('templateReference') childs!: QueryList<any>;
  public toggle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('View Children', this.childs);
  }

  onClick(htmlElement: HTMLInputElement) {
    console.log(htmlElement);
    this.inputRes = htmlElement.value;
  }

  resetChildValue = () => {
    this.childVariable.reset();
  };

  changeTemplateInputValue() {
    this.inputTemplate.nativeElement.value = 'Value changed';
  }

  changeToggle() {
    this.toggle = !this.toggle;
  }
}
