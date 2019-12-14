import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

class User {
  code: string;
  password: string;
  admin: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: WeatherService) { }

  user: User = new User();
  denied: boolean = false;

  login() { //Вхід як адміністратор
    if (this.user.code === '123' && this.user.password === '123') {
      this.service.setAdmin(true);
      this.denied = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.denied = true;
      this.user.code = '';
      this.user.password = '';
    }
  }

  ngOnInit() {
  }

}
