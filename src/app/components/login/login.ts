import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserApiService } from '../../services/user-api-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {

  constructor(
    private readonly router: Router,
    private readonly userApiService: UserApiService
  ) {}

onLogin(form: NgForm): void {
  const mail = form.value.login;
  const password = form.value.password;

  this.userApiService.getUserByMail(mail).subscribe({
    next: (users) => {
      if (users.length === 1 && users[0].password === password && this.validateEmail(mail)) {
        localStorage.setItem('user', JSON.stringify(users[0]));
        this.router.navigate(['/trainings']);
      } else {
        console.error('Email ou mot de passe incorrect');
      }
    },
    error: (error) => {
      console.error('Erreur lors du login :', error);
    }
  });
}

validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
}
