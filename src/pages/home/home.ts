import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherData: any = null;
  cidade = "Itajubá";
  constructor(public navCtrl: NavController, private we:WeatherProvider) {
    this.get5Day(this.cidade);
  }

  getWeathers(){
    this.we.getWeatherFromCity(this.cidade).map(res => res.json()).subscribe((data)=>{

      this.weatherData = data;
    });
  }

  get5Day(name:string){
    this.we.get5DayFromCity(this.cidade).map(res => res.json()).subscribe((data)=>{
      console.log(data);
      this.weatherData = data;
      for(var i = 0; i < this.weatherData.list.length;i++ ){
        this.weatherData.list[i].dt = new Date(this.weatherData.list[i].dt*1000).toLocaleString('pt-BR');
      }
    });
  }

  tempCidade(){
    this.get5Day(this.cidade);
  }

}
