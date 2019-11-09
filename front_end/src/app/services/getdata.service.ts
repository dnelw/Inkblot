import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectInterval } from '../store/selectors/data.selectors';
import { IAppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  url = 'http://localhost:5001';
  interval$ = this.store.pipe(select(selectInterval));

  constructor(
    private http: HttpClient,
    private store: Store<IAppState>
  ) {
    // this.getData().subscribe(data => {
    //   console.log(data);
    // });
  }

  getData(): Observable<any> {
    this.interval$.subscribe(interval => {
      console.log('#########');
      console.log(interval);
    });
    // return this.http.get(this.url);
    return of([
      {
        emotion: {
          joy: 1,
          sorrow: 5,
          anger: 2,
          suprised: 3
        }
      },
      {
        emotion: {
          joy: 5,
          sorrow: 1,
          anger: 4,
          suprised: 1
        }
      },
      {
        emotion: {
          joy: 1,
          sorrow: 3,
          anger: 3,
          suprised: 3
        }
      }
    ]);
  }
}
