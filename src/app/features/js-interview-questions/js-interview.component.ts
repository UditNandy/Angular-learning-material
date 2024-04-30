import { Component } from '@angular/core';

@Component({
  selector: 'app-js-interview',
  templateUrl: './js-interview.component.html',
})
export class JsInterviewComponent {
  ngOnInit() {
    let map: any = new Map();
    map.set('hello', 'hello');
    map.set('hi', 'hi');
    let a = () => {
      return 'a';
    };

    map.set(a, 'hihi');

    let obj: any = new Object();
    obj['hello'] = 'hello';
    obj['hi'] = 'hi';
    obj[a()];

    console.log(map, obj);
  }
}
