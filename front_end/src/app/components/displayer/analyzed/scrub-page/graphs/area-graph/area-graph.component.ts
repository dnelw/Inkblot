import { 
  Component, 
  OnChanges, 
  ViewChild, 
  ElementRef, 
  Input,
  OnInit
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-area-graph',
  templateUrl: './area-graph.component.html',
  styleUrls: ['./area-graph.component.scss']
})
export class AreaGraphComponent implements OnInit, OnChanges {
  @ViewChild('chart', {static: true}) private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() {
    this.createChart();
    if (this.data) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    
  }

  updateChart() {
    
  }
}
