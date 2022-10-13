import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

export type BarChartData = { barName: string, value: string };


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  private _data: BarChartData[];
  @Input() public set data(value: BarChartData[]) {
    this._data = value;
    if (!this.svg) {
      this.createSvg();
    }
    this.drawBars(this._data);
  }


  constructor() { }

  ngOnInit(): void {
    if (!this.svg) {
      this.createSvg();
    }
    this.drawBars(this._data);
  }

  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);


  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    if (this.svg) {
      d3.select("figure#bar").select("svg").remove()
      this.createSvg();
    }
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.barName))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, this.getHighestValue(this._data) ?? 200000])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(d.barName))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this.height - y(d.value))
      .attr("fill", (d) => this.getColour(d.value));
  }

  private getHighestValue(data: BarChartData[]): number {
    return data.map(entry => parseInt(entry.value)).sort((a, b) => a > b ? a : b)[0]
  }

  private getColour(value: number) {

    if (value > 0 && value < 100) {
      return "#d01a35"
    }

    if (value > 100 && value < 200) {
      return "#d02a35"
    }

    if (value > 200 && value < 300) {
      return "#d03a35"
    }

    if (value > 300 && value < 400) {
      return "#d04a35"
    }

    if (value > 400 && value < 500) {
      return "#d05a65"
    }

    if (value > 500 && value < 600) {
      return "#d06a45"
    }

    if (value > 600 && value < 700) {
      return "#d07b25"
    }

    if (value > 700 && value < 800) {
      return "#d07f35"
    }

    if (value > 800 && value < 900) {
      return "#d09a35"
    }

    if (value > 900 && value < 1000) {
      return "#d01b35"
    }
  }

}
