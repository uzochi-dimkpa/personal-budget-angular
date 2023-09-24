import { Component, OnInit, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent /* implements OnInit */ { // -- implements AfterViewInit

  constructor (private http: HttpClient) {};

  // -- ngAfterViewInit(): void {};
  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      // debugger;
      console.log(res);
      this.createChart(res);
    });
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

}
