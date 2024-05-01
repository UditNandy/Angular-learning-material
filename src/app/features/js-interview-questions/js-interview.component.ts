import { Component } from '@angular/core';

@Component({
  selector: 'app-js-interview',
  templateUrl: './js-interview.component.html',
  styleUrls: ['./js-interview.component.css'],
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

  buttonClicked = (event: any) => {
    console.log('Button Clicked');
    // event.stopPropagation();
  };

  divClicked = () => {
    console.log('Div Clicked');
  };

  divCapture() {
    console.log('Div Capture Called');
  }
  buttonCapture() {
    console.log('Button capture called');
  }

  public userInfo = {
    name: 'Udit',
    age: 24,
  };

  getUser = (user: any) => {
    return (info: string) => {
      console.log(user[info]);
    };
  };
}
