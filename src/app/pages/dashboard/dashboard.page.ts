import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Dweet from 'src/app/models/Dweet';
import { DweetService } from 'src/app/services/dweet.service';

@Component({
  selector: 'iot-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

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
  }

}
