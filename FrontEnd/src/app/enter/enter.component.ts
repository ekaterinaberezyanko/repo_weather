import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  constructor(private router: Router, private service: WeatherService) { }

  toLogin() { //Перехід на сторінку входу для адміністратора
    this.router.navigate(['/login']);
  }

  toDashboard() { //Перехід на головну сторінку для користувача
    this.service.setAdmin(false);
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    this.service.loadWeather();
  }

}
