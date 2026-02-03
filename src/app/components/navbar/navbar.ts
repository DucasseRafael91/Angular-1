import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/Authentification/auth-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavBarComponent implements OnInit {

  ngOnInit(): void {
    this.authService.getUser();
  }

  constructor(public authService: AuthService) {}
}
