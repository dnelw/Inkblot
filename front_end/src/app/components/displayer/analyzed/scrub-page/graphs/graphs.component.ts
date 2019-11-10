import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectData, selectIndex, selectInterval } from 'src/app/store/selectors/data.selectors';
import { IVideoData } from 'src/app/models/video-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  chartData: any;
  indexSub$ = this.store.pipe(select(selectIndex));
  index: number;
  vidData$ = this.store.pipe(select(selectData));

  constructor(
    private store: Store<IAppState>
  ) { 
    this.index = 0;
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.generateData();

    //   // change the data periodically
    //   setInterval(() => this.generateData(), 5000);
    // });
    this.indexSub$.subscribe(data => {
      this.index = data;

      this.vidData$.subscribe(data => {
        this.chartData = [];
  
        console.log(data);

        Object.keys(data[this.index].emotions).forEach((key) => {
          this.chartData.push([
            key,
            data[this.index].emotions[key]
          ]);
        });

        
      });
    });
  }

  // generateData() {
  //   this.chartData = [];
  //   for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
  //     this.chartData.push([
  //       `Index ${i}`,
  //       Math.floor(Math.random() * 100)
  //     ]);
  //   }
  //   console.log(this.chartData);
  // }

}
