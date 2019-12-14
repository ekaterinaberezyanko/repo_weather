import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';
import { EnterComponent } from './enter/enter.component';
import { DayWeatherComponent } from './day-weather/day-weather.component';
import { AddWeatherComponent } from './add-weather/add-weather.component';

const itemRoutes: Routes = [
  { path: '', component: DayWeatherComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'weather', component: WeekWeatherComponent },
  { path: 'addweather', component: AddWeatherComponent }
];

const routes: Routes = [
  { path: '', redirectTo: '/enter', pathMatch: 'full' },
  { path: 'enter', component: EnterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: itemRoutes },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }