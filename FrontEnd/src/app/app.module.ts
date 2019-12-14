import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';
import { EnterComponent } from './enter/enter.component';
import { DayWeatherComponent } from './day-weather/day-weather.component';


import { WeatherService } from './weather.service';
import { AddWeatherComponent } from './add-weather/add-weather.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StatisticComponent,
    WeekWeatherComponent,
    EnterComponent,
    DayWeatherComponent,
    AddWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
