import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private service: WeatherService) { }

  ngOnInit() {
    
  }

  logOut() { //Вихід та перехід на сторінку входу
    this.router.navigate(['/enter']);
    this.service.logout();
    
  }

}
