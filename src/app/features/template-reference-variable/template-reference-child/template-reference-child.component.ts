import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-child',
  templateUrl: './template-reference-child.component.html',
  styleUrls: ['./template-reference-child.component.css'],
})
export class TemplateReferenceChildComponent implements OnInit {
  public childValue!: string;
  @ContentChild('projectedContent') childContent!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.childContent) console.log('Child content', this.childContent);
  }

  reset = () => {
    this.childValue = '';
  };
}
