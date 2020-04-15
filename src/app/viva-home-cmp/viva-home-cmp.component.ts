import { Component, OnInit } from '@angular/core';
import {ForAuthService} from '../services/for-auth.service';
import {ForStatisticsService} from '../services/for-statistics.service';

@Component({
  selector: 'app-viva-home-cmp',
  templateUrl: './viva-home-cmp.component.html',
  styleUrls: ['./viva-home-cmp.component.scss']
})
export class VivaHomeCmpComponent implements OnInit {
  today: number = Date.now();

  public stat;
  constructor(private forAuthService: ForAuthService, private statistics: ForStatisticsService) { }

  ngOnInit(): void {
    this.forAuthService.IwantMenu = false;
    this.stat = this.statistics.statistics;
  }

}
