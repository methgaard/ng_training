import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, Subject } from 'rxjs';
import { BarChartData } from './barchart/barchart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public $newData: Subject<BarChartData[]>;
  public newData$: Observable<BarChartData[]>;

  public data: BarChartData[] = [
    { barName: "Vue", value: "166443" },
    { barName: "React", value: "150793" },
    { barName: "Angular", value: "62342" },
    { barName: "Backbone", value: "27647" },
    { barName: "Ember", value: "21471" }
  ];

  constructor() {
    this.$newData = new Subject();
    this.newData$ = this.$newData.asObservable();

    this.newData$.subscribe(data => this.data = data)
  }

  public refreshData() {
    const newData = [...this.data.map(entry => (
      { value: (Math.random() * 1000).toString(), barName: entry.barName }
    )
    )];

    this.$newData.next(newData)
  }
}
