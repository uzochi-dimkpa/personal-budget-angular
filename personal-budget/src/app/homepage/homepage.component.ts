import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

import * as d3 from "d3";
// import * as deSelect from 'd3-selection';
// import * as d3Scale from 'd3';
// import * as d3Shape from 'd3';
// import * as d3Array from 'd3';
// import * as d3Axis from 'd3';

import { DataService } from '../data.service';
// import * as d3_entries from 'd3/entries';
// import * as d3_entries from 'd3/entries';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit { // -- implements OnInit

  constructor (private http: HttpClient, public dataService: DataService) {};

  // -- ngAfterViewInit(): void {};
  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      // debugger;
      console.log(res);
      this.createChart(res);
    });

    this.dataService.ngOnInit();
  }

  createChart(data_source: any) {
    // var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = document.getElementById("myChart") as HTMLCanvasElement;
    // debugger; console.log(ctx);
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data_source,
    });
  };



  /**/


  ngAfterViewInit(): void {
    // --
  };
}
