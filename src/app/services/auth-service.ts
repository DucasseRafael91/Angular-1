import { Injectable } from '@angular/core';
import { EncryptionService } from '../services/encryption-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly encryptionService: EncryptionService) {}

  getUser(): any | null {
    const encryptedUser = localStorage.getItem('user');

    if (!encryptedUser) {
      return null;
    }

    try {
      console.log('Encrypted user from localStorage:', encryptedUser);
      const decryptedUser = this.encryptionService.decrypt(encryptedUser);
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

  getUsername(): string {
    return this.getUser()?.name ?? '';
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
