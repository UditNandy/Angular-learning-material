import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addData, getData } from '../../store/actions/demo.actions';

@Component({
  selector: 'app-ngrx-display',
  templateUrl: './ngrx-display.component.html',
  styleUrls: ['./ngrx-display.component.css'],
})
export class NgrxDisplayComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  constructor(private store: Store<any>) {}

  data$ = this.store.select('data');
  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    this.store.dispatch(getData());
  };

  addData = () => {
    let temp = { name: this.name, age: this.age };
    this.name = '';
    this.age = 0;
    this.store.dispatch(addData(temp));
  };
}
