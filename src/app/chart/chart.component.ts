import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-container',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent  implements OnInit {
  dataSource: object;
  constructor() {
    const chartData = [
    { label: "Jan", value: "3" },
    { label: "Feb", value: "56" },
    { label: "Mar", value: "12" },
    { label: "Jun", value: "49" },
    { label: "Jul", value: "11" },
    { label: "Aug", value: "79" },
    { label: "Sep", value: "90" },
    { label: "Nov", value: "30" },
    { label: "Dec", value: "100" }
  ];
  const chartConfigs = {
    caption: "Vehicle Accident Chart (2022-2023)",
    subCaption: "January-December",
    xAxisName: "REPORT",
    yAxisName: "REPORT",
    numberSuffix: "",
    theme: "fusion"
  };
  this.dataSource = {
    chart: chartConfigs,
    data: chartData
  }; }

  ngOnInit() {}
  
}
