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
      { label: "Jan", value: "102" },
      { label: "Feb", value: "92" },
      { label: "Mar", value: "81" },
      { label: "Apr", value: "43" },
      { label: "May", value: "34" },
      { label: "Jun", value: "22" },
      { label: "Jul", value: "78" },
      { label: "Aug", value: "60" },
      { label: "Sep", value: "1" },
      { label: "Oct", value: "30" },
      { label: "Nov", value: "20" },
      { label: "Dec", value: "171" }
    ];
    const chartConfigs = {
      caption: "Monthly Occured/Reported Accidents",
      subCaption: "Gabaldon, Nueva Ecija",
      xAxisName: "Accidents",
      yAxisName: "2023-2024",
      numberSuffix: "+-",
      theme: "fusion"
    };
    this.dataSource = {
      chart: chartConfigs,
      data: chartData
    };
  }
  ngOnInit() {}
}