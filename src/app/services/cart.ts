import { Injectable } from '@angular/core';
import { Training } from '../components/trainings/trainings.model';
import { OrderService } from './order'; // Vérifie bien le nom du fichier

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Training[] = [];
  private readonly storageKeyCart = 'cart';

  // ✅ Injection du service OrderService
  constructor(private orderService: OrderService) {
    const storedCart = localStorage.getItem(this.storageKeyCart);
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  addTraining(training: Training) {
    const existingItem = this.cart.find(t => t.id === training.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + (training.quantity || 1);
    } else {
      this.cart.push(training);
    }
    localStorage.setItem(this.storageKeyCart, JSON.stringify(this.cart));
  }

  deleteTraining(training: Training) {
    this.cart = this.cart.filter(t => t.id !== training.id);
    localStorage.setItem(this.storageKeyCart, JSON.stringify(this.cart));
  }

  validateCart() {
    if (this.cart.length === 0) return;
    this.orderService.createOrder(this.cart);
    this.cart = [];
    localStorage.setItem(this.storageKeyCart, JSON.stringify(this.cart));
  }

  getCart(): Training[] {
    return this.cart;
  }
}
