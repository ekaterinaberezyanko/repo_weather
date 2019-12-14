import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from '../../../node_modules/chart.js/dist/Chart';
import { Weather } from '../Weather';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  chartRain: any;
  chartTemp: any;
  chartVote: any;
  todayWeather: Weather;
  isWeather = true;
  rainDay: number;
  noRainDay: number;

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.todayWeather = this.service.getDayWeather();
    if (this.todayWeather) {
      this.rainDay = this.service.getMonthWeather().filter( item => { return item.propabPrecipitation >= 50 }).length;
      this.noRainDay = this.service.getMonthWeather().filter( item => { return item.propabPrecipitation < 50 }).length;
      this.makeCharts();
    } else {
      this.isWeather = false;
    }
  }

  makeCharts () {
    const temp = []; //Температура на кожен день місяця
    const day = []; //Деі місяця

    //Заповнюємо temp та day масиви
    this.service.getMonthWeather().forEach( item => {
      temp.push(item.dayTemp);
      day.push(item.dateDay);
    })

    const dataTemp = {
      label: 'Temperature',
      data: temp,
      backgroundColor: '#F6546A'
    };

    this.chartTemp = new Chart('canvasTemp', {
      type: 'bar',
      data: {
        labels: day,
        datasets: [dataTemp]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
        }
      }
    });
    
    this.chartRain = new Chart('canvasRain', {
    type: 'pie',
    data: {
      labels: ['Дощові дні', 'Не дощові дні'],
      datasets: [
        {
          data: [this.rainDay, this.noRainDay],
          backgroundColor: ['#71ff45', '#F6546A']
        }]
      }
    });
  
    const rainDay = this.todayWeather.yesVoted;
    const noRainDay = this.todayWeather.allVoted - rainDay;

    this.chartVote = new Chart("canvasVote", {
    type: 'pie',
    data: {
      labels: ["Так", "Ні"],
      datasets: [{
        label: "Результати Голосування",
        backgroundColor: ["#3e95cd", "#8e5ea2"],
        data: [rainDay, noRainDay]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Результати голосування'
      }
    }
  });
  }    
}

  
