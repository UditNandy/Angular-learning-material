import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgrxService } from '../../services/ngrx-service/ngrx.service';
import {
  addDataSuccess,
  getData,
  getDataSuccess,
} from '../actions/demo.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class DemoEffect {
  loadDemoUsers$ = createEffect(() =>
    this.action.pipe(
      ofType(getData),
      exhaustMap((state) =>
        this.demoService.getAllData().pipe(
          map((user: any) => {
            console.log('From effect ', user);
            return getDataSuccess({ user });
          })
        )
      )
    )
  );
  constructor(private action: Actions, private demoService: NgrxService) {}
}
