import { Component, OnInit } from '@angular/core';
import { concatMap, delay, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-pipes-view',
  templateUrl: './pipes-view.component.html',
  styleUrls: ['./pipes-view.component.css'],
})
export class PipesViewComponent implements OnInit {
  constructor() {}
  public obs$ = interval(1000);

  gender = 'male';
  name!: string;
  gender1!: string;
  employeeList = [
    { name: 'Udit', gender: 'male' },
    { name: 'Vikram', gender: 'male' },
    { name: 'Sonali', gender: 'female' },
    { name: 'Mallik', gender: 'female' },
    { name: 'Akhilesh', gender: 'male' },
  ];

  ngOnInit(): void {}

  onSubmit = () => {
    let newObj = { name: this.name, gender: this.gender1 };
    this.employeeList.push(newObj);
  };
}
