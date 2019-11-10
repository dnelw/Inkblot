import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectIndex, selectData } from 'src/app/store/selectors/data.selectors';

@Component({
  selector: 'app-image-atevent',
  templateUrl: './image-atevent.component.html',
  styleUrls: ['./image-atevent.component.scss']
})
export class ImageAteventComponent implements OnInit {
  indexData$ = this.store.pipe(select(selectIndex));
  vidData$ = this.store.pipe(select(selectData));
  i: number;
  image: string;
  
  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {

    this.indexData$.subscribe(indexVal => {
      this.i = indexVal;

      this.vidData$.subscribe(data => {
        this.image = data[this.i].image;
      })
    })

  }

}
