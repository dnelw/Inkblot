import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectInterval } from 'src/app/store/selectors/data.selectors';

@Component({
  selector: 'app-scrub-control',
  templateUrl: './scrub-control.component.html',
  styleUrls: ['./scrub-control.component.scss']
})
export class ScrubControlComponent implements OnInit {
  index: number;
  intervalData$ = this.store.pipe(select(selectInterval));
  

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    
  }

}
