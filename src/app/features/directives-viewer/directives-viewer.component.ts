import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-viewer',
  templateUrl: './directives-viewer.component.html',
  styleUrls: ['./directives-viewer.component.css'],
})
export class DirectivesViewerComponent implements OnInit {
  public customIfDisplay: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
