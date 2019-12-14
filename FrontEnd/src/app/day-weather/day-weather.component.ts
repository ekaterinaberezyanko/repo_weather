import { Component, OnInit } from '@angular/core';
import { Weather } from '../Weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css'],
})
export class DayWeatherComponent implements OnInit {

  todayWeather: Weather; // Погода на сьогодні

  isWeather = true; //Перевірка чи є прогноз на сьогодні

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.todayWeather = this.service.getDayWeather();
    if (this.todayWeather) {
      if (this.todayWeather.cataclism !== '') {
        alert(`Обережно сьогдні  ${this.todayWeather.cataclism}`);
      }
    } else {
      this.isWeather = false;
    }
    
  }

}
