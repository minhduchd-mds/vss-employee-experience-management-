import {Component, NgModule, OnInit} from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import Chart from 'chart.js';
import {from} from 'rxjs';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from '../../variables/charts';
import {ApiServiceService} from '../service/api-service.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// core components

export class DashboardComponent implements OnInit {
  employee: Employee[];
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;
  tabbarType = 1;
  constructor(private service: ApiServiceService) {
    this.getData();
  }
  ngOnInit() {
    const chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());

    // tslint:disable-next-line:prefer-const
    let ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });
  }
  getData() {
    this.service.getDUs().subscribe(val => {
      this.employee = val;
    });
  }
  // tab
  clickTabbar(tabbarType: number) {
    try {
      if (tabbarType) {
        this.tabbarType = tabbarType;
      }

    } catch (error) {
      console.log(error);
    }
  }

}
