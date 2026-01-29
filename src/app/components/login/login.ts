import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  OnLogin() {
    this.router.navigate(['/trainings']);
  }
}
