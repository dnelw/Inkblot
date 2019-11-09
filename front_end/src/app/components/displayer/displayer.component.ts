import { Component, OnInit } from '@angular/core';

import { GetdataService } from 'src/app/services/getdata.service';
import { selectInterval } from 'src/app/store/selectors/data.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { AddVideoFrame, SetInterval } from 'src/app/store/actions/data.actions';
// import { MaterialModule } from 'src/material/material.module';

export enum EDisplayState {
  Menu,
  Loading,
  Analyzed
}

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
export class DisplayerComponent implements OnInit {
  interval$ = this.store.pipe(select(selectInterval));
  interval: number;
  displayState = EDisplayState.Menu;
  EDisplayState: EDisplayState;
  

  constructor(
    private fetchMyBoy: GetdataService,
    private store: Store<IAppState>
  ) {
    this.interval = 5;
  }

  onValueChanged(value: number) {
    // console.log(event.target.value);
    this.interval = value;

    this.store.dispatch(new SetInterval(
      this.interval
    ));
  }  

  fetchData() {
    this.displayState = EDisplayState.Loading;
    this.fetchMyBoy.getData().subscribe(data => {
      data.map((vidData, index) => {
        console.log(this.interval);
        this.store.dispatch(new AddVideoFrame(
          index * this.interval,
          vidData
        ));
      });
      this.displayState = EDisplayState.Analyzed;
    })
  }

  ngOnInit() {

  }

}
