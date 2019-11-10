import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectData, selectIndex, selectInterval } from 'src/app/store/selectors/data.selectors';

@Component({
  selector: 'app-text-container',
  templateUrl: './text-container.component.html',
  styleUrls: ['./text-container.component.scss']
})
export class TextContainerComponent implements OnInit {
  indexData$ = this.store.pipe(select(selectIndex));
  videoData$ = this.store.pipe(select(selectData));
  intervalData$ = this.store.pipe(select(selectInterval));
  indexVal: number;
  inter: number;
  textSegment: Array<string>;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.textSegment = [];

    this.indexData$.subscribe(data => {
      this.indexVal = data;
    });

    this.intervalData$.subscribe(data => {
      this.inter = data;
    })

    this.videoData$.subscribe(data => {
      Object.keys(data).forEach(key => {
        this.textSegment.push(data[key].text);
      });
    });

    console.log(this.textSegment);
  }


}
