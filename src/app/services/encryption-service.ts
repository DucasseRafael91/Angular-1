import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class EncryptionService {

  private readonly secretKey = 'Cle Secrete';

  encrypt(data: any): string {
    return CryptoJS.AES.encrypt(JSON.stringify(data),this.secretKey).toString();
  }

  decrypt(data: string): any {
    const bytes = CryptoJS.AES.decrypt(data, this.secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
