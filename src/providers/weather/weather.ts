import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherProvider {
  weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  forecastUrl = "http://api.openweathermap.org/data/2.5/forecast/daily"
  private appId= "appid=aed29e739f75dc3ec8c1246b386d73ec"
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }


  getWeatherFromCity(name:string){
    return this.http.get(this.weatherUrl+"?q="+name+"&units=metric&lang=pt&"+this.appId);
  }

  get5DayFromCity(name:string){
    return this.http.get(this.forecastUrl+"?q="+name+"&units=metric&lang=pt&"+this.appId);
  }
}
