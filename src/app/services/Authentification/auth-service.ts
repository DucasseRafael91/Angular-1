import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  private readonly secretKey = 'Cle Secrete';
  
    encrypt(data: any): string {
      return CryptoJS.AES.encrypt(JSON.stringify(data),this.secretKey).toString();
    }
  
    decrypt(data: string): any {
      const bytes = CryptoJS.AES.decrypt(data, this.secretKey);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

  getUser(): any | null {
    const encryptedUser = localStorage.getItem('user');

    if (!encryptedUser) {
      return null;
    }

    try {
      console.log('Encrypted user from localStorage:', encryptedUser);
      const decryptedUser = this.decrypt(encryptedUser);
      console.log('Decrypted user:', decryptedUser);
      return decryptedUser;
    } catch (error) {
      console.error('Erreur lors du déchiffrement du user:', error);
      this.logout();
      return null;
    }
  }

  isLogged(): boolean {
    return this.getUser() !== null;
  }

isAdmin(): boolean {
  const user = this.getUser();
  if (user && user.roles?.includes('Admin')) {
    return true;
  } else {
    return false;
  }
}


  getUsername(): string {
    return this.getUser()?.name ?? '';
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
