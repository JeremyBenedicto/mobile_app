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
      { label: "Jan", value: "91" },
      { label: "Feb", value: "87" },
      { label: "Mar", value: "68" },
      { label: "Apr", value: "54" },
      { label: "May", value: "68" },
      { label: "Jun", value: "71" },
      { label: "Jul", value: "78" },
      { label: "Aug", value: "60" },
      { label: "Sep", value: "75" },
      { label: "Oct", value: "56" },
      { label: "Nov", value: "54" },
      { label: "Dec", value: "71" }
    ];
    const chartConfigs = {
      caption: "Monthly Occured/Reported Accidents",
      subCaption: "Gabaldon, Nueva Ecija",
      xAxisName: "Accidents",
      yAxisName: "2021-2022",
      numberSuffix: "+",
      theme: "fusion"
    };
    this.dataSource = {
      chart: chartConfigs,
      data: chartData
    };
  }
  ngOnInit() {}
}