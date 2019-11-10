import { 
  Component, 
  OnInit, 
  ViewChild, 
  Input, 
  ElementRef } 
from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
  @ViewChild('lineChart', {static: true}) private chartRef;
  chart: any;
  @Input() dataPoints: Array<any>;
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

    this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
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
                beginAtZero: true,
              }
            }]
          }
        }
    });
  }


  addData() {
    let ydat: Array<any> = [];

    console.log("$$$$$$$$$$");
    this.dataPoints.map((value, i) => {
      console.log(value);
      // this.labels.push(value[0]);
      ydat.push(
        value[1]
      );
    });
    console.log("$$$$$$$$$$");

    console.log(ydat);

    this.chart.data.labels =  this.labels
    console.log(this.labels);
    console.log(ydat);
    this.chart.data.dataset.push({
      labels: this.labels,
      backgroundColor: this.colors,
      data: ydat
    });
    this.chart.update();

    console.log(this.chart.data.labels);
    console.log(this.chart.data.datasets);
  }

  removeData() {
      // this.chart.data.labels = ;
      this.chart.data.datasets.forEach((dataset) => {
          dataset.data.pop();
      });
      this.chart.update();
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

  // updateChart() {

  // }

}
