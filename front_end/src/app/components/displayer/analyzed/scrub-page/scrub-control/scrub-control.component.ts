import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectInterval, selectLength } from 'src/app/store/selectors/data.selectors';
import { SetIndex } from 'src/app/store/actions/data.actions';

@Component({
  selector: 'app-scrub-control',
  templateUrl: './scrub-control.component.html',
  styleUrls: ['./scrub-control.component.scss']
})
export class ScrubControlComponent implements OnInit {
  index: number;
  intervalData$ = this.store.pipe(select(selectInterval));
  interval: number;  
  intervalLength$ = this.store.pipe(select(selectLength));
  dataLength: number;
  val: number;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.intervalData$.subscribe(intervalData => {
      this.interval = intervalData;

      this.intervalLength$.subscribe(lengthData => {
        this.dataLength = (lengthData-1) * intervalData;
      });
    });
  }

  sliderChange(event: any) {
    this.store.dispatch(new SetIndex(
      event.value
    ));
  }
}
