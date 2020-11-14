import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Dweet from '../../models/Dweet';
import { DweetService } from '../../services/dweet.service';

@Component({
  selector: 'iot-luminosity',
  templateUrl: './luminosity.page.html',
  styleUrls: ['./luminosity.page.scss'],
})
export class LuminosityPage implements OnInit, OnDestroy {

  public dweet: Dweet;
  public isLoading: boolean = true;
  private time: any;
  private dataPlot: Array<any>;

  options: Object;

  constructor(private dweetService: DweetService, private router: Router) {
    this.time = setInterval(() => {
      this.getLastDweets();
    }, 3000);
  }

  ngOnInit() {
    this.getLastDweets();
  }

  ngOnDestroy() {
    clearInterval(this.time);
  }

  goBack() {
    this.router.navigate(['home']);
  }

  private getLastDweets() {
    this.dataPlot = [];
    this.dweetService.loadLastDweets().subscribe(
      (data) => {
        this.preencherDweet(data);
      },
      (err) => {
        console.log('Erro: ', err);
      },
      () => (this.isLoading = false)
    );
  }

  private preencherDweet(data: any) {
    this.dweet = this.dweetService.preencherDweet(data);
    this.loadDataForPlot(this.dweet);
    this.plotChart();
  }

  private loadDataForPlot(dweet: Dweet) {
    for (let _with of dweet.with) {
      let epoch = new Date(_with.created).getTime();
      this.dataPlot.push([epoch, _with.content.$luminosidade]);
    }
  }

  private plotChart() {
    this.options = {
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: 'Valores'
        },
        labels: {
          formatter: function () {
            return this.value;
          },
        },
      },
      title: { text: 'Luminosidade ' },
      series: [
        {
          name: 'Luminosidade',
          data: this.dataPlot.reverse(),
          pointInterval: 60 * 60,
        },
      ],
    };
  }

}
