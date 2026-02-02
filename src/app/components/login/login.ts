import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  constructor(private readonly router: Router) {}

  onLogin(form: any) {
    const username = form.value.login;
    localStorage.setItem('user',JSON.stringify({name: username,}));
    this.router.navigate(['/trainings']);
  }
}
