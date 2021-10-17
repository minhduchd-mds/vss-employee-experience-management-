import {Component, NgModule, OnInit} from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import Chart from 'chart.js';
import {from} from 'rxjs';
import {
  chartOptions,
  parseOptions,
  HardSkillsRadar,
  SoftSkillsRadar,
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
    const SoftSkills = document.getElementById('chart-radar1');
    const HardSkills = document.getElementById('chart-radar2');
    const HardSkillsTab = document.getElementById('chart-radar3');
    parseOptions(Chart, chartOptions());
    // tslint:disable-next-line:prefer-const no-unused-expression
    new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });
    // tslint:disable-next-line:no-unused-expression
    new Chart(SoftSkills, {
      type: 'radar',
      options: SoftSkillsRadar.options,
      data: SoftSkillsRadar.data
    });
    // tslint:disable-next-line:no-unused-expression
    new Chart(HardSkills, {
      type: 'radar',
      options: HardSkillsRadar.options,
      data: HardSkillsRadar.data
    });
    // tslint:disable-next-line:no-unused-expression
    new Chart(HardSkillsTab, {
      type: 'radar',
      options: HardSkillsRadar.options,
      data: HardSkillsRadar.data
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
