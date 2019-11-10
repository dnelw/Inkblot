import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { select, Store } from "@ngrx/store";
import { selectInterval } from "../store/selectors/data.selectors";
import { IAppState } from "../store/state/app.state";

@Injectable({
  providedIn: "root"
})
export class GetdataService {
  url = "http://35.221.34.118/process/";
  interval$ = this.store.pipe(select(selectInterval));
  inter: number;

  constructor(private http: HttpClient, private store: Store<IAppState>) {
    // this.getData().subscribe(data => {
    //   console.log(data);
    // });
  }

  getData(): Observable<any> {
    this.interval$.subscribe(interval => {
      console.log("#########");
      this.inter = interval;
    });

    // return this.http.get(this.url + this.inter);
    // return this.http.get(this.url);
    return of([
      {
        text: "Hello my darling",
        emotions: {
          joy: 1,
          sorrow: 5,
          anger: 2,
          suprised: 3
        }
      },
      {
        text: "Hello my honey",
        emotions: {
          joy: 5,
          sorrow: 1,
          anger: 4,
          suprised: 1
        }
      },
      {
        text: "Hello my rag time",
        emotions: {
          joy: 1,
          sorrow: 3,
          anger: 3,
          suprised: 3
        }
      }
    ]);
  }
}
