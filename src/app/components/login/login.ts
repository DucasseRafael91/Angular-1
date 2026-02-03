import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserApiService } from '../../services/API/userApi/user-api-service';
import { EncryptionService } from '../../services/encryption-service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {

  constructor(private readonly router: Router,private readonly userApiService: UserApiService,private readonly encryptionService: EncryptionService) {}

onLogin(form: NgForm): void {
  const mail = form.value.login;
  const password = form.value.password;

  this.userApiService.getUserByMail(mail).subscribe({
    next: (users) => {
      if (
        users.length === 1 &&
        users[0].password === password &&
        this.validateEmail(mail)
      ) {
        const encryptedUser = this.encryptionService.encrypt(users[0]);
        localStorage.setItem('user', encryptedUser);
        this.router.navigate(['/trainings']);
      } else {
        alert('Email ou mot de passe incorrect');
      }
    }
  });
}

validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
}
