import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLogged(): boolean {


    return this.getUser() !== null;
  }

  getUsername(): string {
    return this.getUser()?.name;
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
