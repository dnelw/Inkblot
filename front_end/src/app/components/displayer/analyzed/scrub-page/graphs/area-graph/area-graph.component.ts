import { 
  Component, 
  OnChanges, 
  ViewChild, 
  ElementRef, 
  Input,
  OnInit
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-area-graph',
  templateUrl: './area-graph.component.html',
  styleUrls: ['./area-graph.component.scss']
})
export class AreaGraphComponent implements OnInit, OnChanges {
  @ViewChild('areaChart', {static: true}) private chartContainer;
  @Input() private dataPoints: Array<any>;
  chart: any;
  labels: Array<string>;
  colors: Array<string>;


  constructor() {
    this.labels = [];
    this.colors = ["#99f4ef", "#ff7777","#4caae4","#fa9dcf"];
  }

  ngOnInit() {
    this.createChart();
    if (this.dataPoints) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    let ydat: Array<any> = [];

    this.dataPoints.map((value, i) => {
      this.labels.push(value[0]);
      ydat.push(
        value[1]
      );
    });

    console.log(ydat);

    this.chart = new Chart(this.chartContainer.nativeElement, {
        type: 'polarArea',
        data: {
          labels: this.labels,
          datasets: [
            {
              backgroundColor: this.colors,
              data: ydat
            }
          ]
        },
        options: {
          responsive: true,
          legend: { display: false },
          title: {
            display: true,
            text: 'Analysis Bar Chart'
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
    });
  }

  updateChart() {
    let ydat: Array<any> = [];

    this.dataPoints.map((value, i) => {
      console.log(value);
      // this.labels.push(value[0]);
      ydat.push(
        value[1]
      );
    });

    this.chart.data.datasets.pop();
    this.chart.data.datasets.push({
      labels: this.labels,
      backgroundColor: this.colors,
      data: ydat
    });

    this.chart.update();
  }
}
