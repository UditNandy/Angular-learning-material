import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-oriented-javascript',
  templateUrl: './object-oriented-javascript.component.html',
  styleUrls: ['./object-oriented-javascript.component.css'],
})
export class ObjectOrientedJavascriptComponent implements OnInit {
  constructor() {
    console.log('Constructor called', this);
  }

  ngOnInit(): void {
    console.log('On init called', this);
  }

  public immediate = (() => {
    console.log('IIFE', this);
  })();
}
