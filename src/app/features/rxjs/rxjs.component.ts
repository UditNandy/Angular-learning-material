import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  asapScheduler,
  bufferTime,
  catchError,
  combineLatest,
  concatMap,
  delay,
  forkJoin,
  from,
  interval,
  last,
  map,
  mergeMap,
  observeOn,
  of,
  reduce,
  scan,
  scheduled,
  switchMap,
  take,
  throwError,
  timeout,
  timer,
  withLatestFrom,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.createObservables();
    // this.callAjax();
    // this.callReduce();
    // this.callScan();
    // this.callCombineLatest();
    // this.callForkJoin();
    // this.callWithLatestFrom();
    // this.callMergeMap();
    // this.callMergeMapForSeriesApi();
    // this.callSwitchMap();
    // this.callConcatMap();
    // this.callDelay();
    // this.callTimeOut();
    // this.callCatchError();
    // this.handleBlackPressure();
    // this.callHotObservable();
    // this.callColdObservable();
    // this.callLast();
  }

  callLast() {
    //It gives the last emitted value
    of(1, 2, 3)
      .pipe(last())
      .subscribe((val) => {
        console.log(val);
      });
  }

  callColdObservable() {
    /*
      1.They are generally unicast
    */

    let obs$ = new Observable((observer) => {
      observer.next(Math.random());
    });

    obs$.subscribe(console.log);
    obs$.subscribe(console.log);
  }

  callHotObservable() {
    /*
      1.They are multicasting
    */

    let random = Math.random();
    let obs$ = new Observable((observer) => {
      observer.next(random);
    });

    obs$.subscribe(console.log);
    obs$.subscribe(console.log);
  }

  handleBlackPressure() {
    /*
      1.Sometimes the source/observable emits values in a faster rate then the consumer being able to execute it.
      2.To handle this we can add some buffer or delay 
    */
    interval(100)
      .pipe(
        switchMap((val) => {
          return of(val).pipe(delay(1000));
        })
      )
      .subscribe((val) => console.log(val));
  }

  callTimeOut() {
    /*
      1.Throws error if the observable is not executed before the given time
    */

    interval(1000)
      .pipe(timeout(2000))
      .subscribe((val) => console.log(val));
  }

  callDelay() {
    /*
      1.Adds some delay to emission of values
    */

    of(1, 2, 3)
      .pipe(delay(2000))
      .subscribe((val) => console.log(val));
  }

  callCatchError() {
    /*
      1.Helps to any error if emitted
    */

    this.httpClient
      .get('')
      .pipe(
        catchError((err) => {
          console.log('Error found');
          return err;
        })
      )
      .subscribe((val) => console.log(val));
  }

  callConcatMap() {
    const source$ = of('A', 'B', 'C');
    source$
      .pipe(
        concatMap((value) => {
          return of(1, 2, 3, asapScheduler).pipe(
            map((innerValue) => {
              return `${value}${innerValue}`;
            })
          );
        })
      )
      .subscribe((result) => console.log(result));
  }

  callSwitchMap() {
    const source$ = of('A', 'B', 'C');
    source$
      .pipe(
        switchMap((value) => {
          return of(1, 2, 3, asapScheduler).pipe(
            map((innerValue) => {
              return `${value}${innerValue}`;
            })
          );
        })
      )
      .subscribe((result) => console.log(result));
  }

  callMergeMapForSeriesApi() {
    this.httpClient
      .get('./assets/hello.json')
      .pipe(
        map((res1) => {
          return { res1: res1 };
        })
      )
      .pipe(
        mergeMap((prev) => {
          return this.httpClient.get('./assets/name.json').pipe(
            map((val) => {
              return { ...prev, res2: val };
            })
          );
        })
      )
      .pipe(
        mergeMap((prev) => {
          return this.httpClient.get('./assets/friend.json').pipe(
            map((val) => {
              return { ...prev, res3: val };
            })
          );
        })
      )
      .subscribe((val) => console.log(val));
  }

  callMergeMap() {
    const source$ = of('A', 'B', 'C');
    source$
      .pipe(
        mergeMap((value) => {
          return scheduled([1, 2, 3], asapScheduler).pipe(
            map((innerValue) => {
              return `${value}${innerValue}`;
            })
          );
        })
      )
      .subscribe((result) => console.log(result));
  }

  callForkJoin() {
    let obs1 = of('Hello', 'Hi');
    let obs2 = of(1, 2, 3);
    forkJoin([obs1, obs2]).subscribe((val) => console.log(val));
  }

  callCombineLatest() {
    let obs1 = of('Hello', 'Hi');
    let obs2 = of(1, 2, 3);
    combineLatest([obs1, obs2]).subscribe((val) => console.log(val));
  }

  callWithLatestFrom() {
    //Check it please
    let obs1 = of('Hello', 'Hi');
    let obs2 = of(1, 2, 3);
    obs1.pipe(withLatestFrom(obs2)).subscribe((val) => console.log(val));
  }

  createObservables() {
    let obs1 = of('A', 'B', 'C');
    let obs2 = interval(500)
      .pipe(take(3))
      .pipe(map((val) => val * 2));
    let obs3 = from(['X', 'Y', 'Z']);
  }

  callAjax() {
    ajax.get('./assets/hello.json').subscribe((val) => {
      console.log(val);
    });
  }

  callScan() {
    of(100, 200, 300, 400)
      .pipe(
        scan((acc, val) => {
          return acc + val;
        }, 0)
      )
      .subscribe((val) => console.log(val));
  }

  callReduce() {
    of(100, 200, 300, 400)
      .pipe(
        reduce((acc, val) => {
          return acc + val;
        }, 0)
      )
      .subscribe((val) => console.log(val));
  }
}
