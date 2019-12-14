import { Component, OnInit } from '@angular/core';
import { Weather } from '../Weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.css']
})
export class AddWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  private data: Weather = { //Початкова нова погода
    id: null,
    dateDay: null,
    dateMonth: null,
    dayTemp: null,
    nightTemp: null,
    propabPrecipitation: null,
    windSpeed: null,
    cloudySky: '',
    airHumidity: null,
    cataclism: '',
    allVoted: 0,
    yesVoted: 0
  };

  addWeather() { //Додати прогноз в базу
    if (this.data.dateDay !== null && this.data.dateMonth !== null && this.data.dayTemp !== null && this.data.nightTemp !== null && this.data.propabPrecipitation !== null) {
      this.weatherService.addWeather(this.data);
    } else {
      console.log('error');
    }
  }

  ngOnInit() {
  }

}
