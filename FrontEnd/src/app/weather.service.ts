import { Injectable } from '@angular/core';
import { Weather } from './Weather';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private data: any;  //Погода
  
  loadWeather (){ //Завантаження погоди з серверу
    this.http.get('http://localhost:8082/weather').subscribe((data) => { 
      this.data = data;
    });
  }

  getWeather() { //Функція повертає всю погоду
    return this.data;
  }

  addWeather (data) {
    this.http.put('http://localhost:8082/weather', data).subscribe( () => {
      this.loadWeather();
    });
    
  }

  private isAdmin: boolean; //Перевірка чи користувач адмін

  private isVoted: boolean; // Перевірка чи користувач проголосував

  vote(answer: boolean, id: number){ // Проголосувати
    console.log(id)
    if (answer) {
      this.http.post("http://localhost:8082/weather/yesvoted", id).subscribe(() => { return id });
    } else {
      this.http.post('http://localhost:8082/weather/novoted', id).subscribe();
    }
    this.isVoted = true;
  }

  setAdmin(user: boolean): void { //Зробити користувача адміном
    this.isAdmin = user;
  }

  getAdmin(): boolean { //Повертає значення чи адмін користувач
    return this.isAdmin;
  }

  logout(){ //Вихід
    this.isVoted = false;
    this.isAdmin = false;
  }

  getWeekWeather(): Weather[] { // Повертає погоду на наступні 7 днів
    const dayDate = new Date().getDate();
    const monthDate = new Date().getMonth();
    if (this.data) {
      const weather = this.data.filter(item  => {return item.dateDay >= dayDate && item.dateDay <= dayDate + 6 && item.dateMonth == monthDate});
      return weather;
    } else {
      return null;
    }
  }

  getDayWeather(): Weather { // Повертає погоду на поточний день
    this.getWeather();
    const dayDate = new Date().getDate();
    const monthDate = new Date().getMonth();
    console.log(this.data, dayDate, monthDate);
    if (this.data) {
      const weather = this.data.filter(item => {return item.dateDay == dayDate && item.dateMonth == monthDate});
      return weather[0];
    } else {
      return null;
    }
  }

  getMonthWeather(): Weather[] { //Повертає погоду на місяць
    const monthDate = new Date().getMonth();
    if (this.data) {
      const weather = this.data.filter(item => {return item.dateMonth == monthDate});
      return weather;
    } else {
      return null;
    }
    
  }


  getMonth(month: number): String { // Переводить назву місяця з числа в слово
    const monthes = ['Січень', 'Лютий','Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
    return monthes[month];
  }

  constructor(private http: HttpClient) { }
}
