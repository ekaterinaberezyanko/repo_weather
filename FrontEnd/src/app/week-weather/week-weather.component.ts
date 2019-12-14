import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../Weather';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css']
})
export class WeekWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  data: Weather[] = []

  ngOnInit() {
    this.data = this.weatherService.getWeekWeather(); //Отримання прогнозів на 7 днів
  }

}
