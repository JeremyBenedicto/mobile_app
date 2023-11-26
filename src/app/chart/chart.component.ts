// chart.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chart-container",
  templateUrl: "chart.component.html",
  styleUrls: ["chart.component.scss"]
})
export class ChartComponent implements OnInit {
  dataSource: object;
  constructor() {
    const chartData = [
      { label: "Venezuela", value: "290" },
      { label: "Saudi", value: "260" },
      { label: "Canada", value: "180" },
      { label: "Iran", value: "140" },
      { label: "Russia", value: "115" },
      { label: "UAE", value: "100" },
      { label: "US", value: "30" },
      { label: "China", value: "30" }
    ];
    const chartConfigs = {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    };
    this.dataSource = {
      chart: chartConfigs,
      data: chartData
    };
  }
  ngOnInit() {}
}