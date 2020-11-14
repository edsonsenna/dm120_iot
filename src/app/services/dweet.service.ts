import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DweetSettingsEnum } from '../enum/DweetSettingsEnum';
import Content from '../models/Content';
import Dweet from '../models/Dweet';
import With from '../models/With';

@Injectable({
  providedIn: 'root',
})
export class DweetService {
  private dweetApiUrl = DweetSettingsEnum.DWEET_URL_GET_ALL;
  private thingName = DweetSettingsEnum.DWEET_THING_NAME;

  constructor(private http: HttpClient) {}

  loadLastDweets() {
    return this.http.get(
      this.dweetApiUrl.toString() + this.thingName.toString()
    );
  }

  private formatDate(date: any): string {
    let originalDate: string = date;
    var dateParse = originalDate.slice(0, 10);
    return dateParse;
  }

  private formatTime(date: any): string {
    let originalDate: string = date;
    var timeParse = originalDate.slice(11, 19);
    return timeParse;
  }

  preencherDweet(data: any): Dweet {
    let dweet: Dweet;
    let _withs: Array<With>;
    let _date: string;
    let _time: string;
    _withs = new Array<With>();
    for (let _with of data.with) {
      let tempContent: Content;
      tempContent = new Content(
        _with.content.temperatura,
        _with.content.minTemp,
        _with.content.maxTemp,
        _with.content.luminosidade,
        _with.content.minLum,
        _with.content.maxLum,
        _with.content.umidade,
        _with.content.minUmid,
        _with.content.maxUmid,
        _with.content.current_color,
        _with.content.status_buzzer
      );
      _date = this.formatDate(_with.created);
      _time = this.formatTime(_with.created);
      let tempWith: With;
      tempWith = new With(
        _with.thing,
        _with.created,
        tempContent,
        _date,
        _time
      );
      _withs.push(tempWith);
    }
    dweet = new Dweet(data.this, data.by, data.the, _withs);
    return dweet;
  }
}
