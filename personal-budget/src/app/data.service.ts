import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { };

  svg: any;
  margin = 50;
  width = 750;
  height = 600;
  radius = Math.min(this.width, this.height) / 2 - this.margin;
  colors: any;

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  private createColors(data: any, colors: any): void {
    this.colors = d3.scaleOrdinal()
    .domain(data)
    .range(colors);
  }

  private drawChart(data: any, labels: any): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d));
    // const pie = d3.pie()(data.map((d: any) => Number(d)));

    // Build the pie chart
    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d: any, i: any) => (this.colors(i)))
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('text')
    // .text((d: any) => data)
    .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);
  }

  ngOnInit(): void {
     this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      console.log(res);
      // this.json_data = res;
      // console.log("json_data: ");
      // console.log(this.json_data);

      // debugger;
      // var newPie = d3.pie();
      // var arcs = newPie(res.datasets[0].data);
      // console.log(newPie(res.datasets[0].data));
      // const old_arcs = d3.pie()(res.datasets[0].data.map((d: any) => d.number));

      // var data = [1.1,2.2,4.46,2.12,1.36,5.002445,4.1242];
      var data = res.datasets[0].data;
      var labels = res.labels;
      // var width = 300; var height = 200;

      var colors = res.datasets[0].backgroundColor;

      // const pie = d3.pie<any>().value((d: any) => Number(d));

      if (res != null) {
        this.createSvg();
        this.createColors(data, colors);
        this.drawChart(data, labels);
      }

    });
  }
}
