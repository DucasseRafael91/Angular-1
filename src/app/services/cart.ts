import { Injectable } from '@angular/core';
import { Training } from '../components/trainings/trainings.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Training[] = [];
  private storageKey = 'cart';

  constructor() {
    const storedCart = localStorage.getItem(this.storageKey);
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  addTraining(training: Training) {
    this.cart.push({ ...training });
    localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  }

  deleteTraining(training: Training) {
    this.cart = this.cart.filter(t => t.id !== training.id);
    localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  }

  validateCart() {
    this.cart = [];
    localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  }

  getCart(): Training[] {
    return this.cart;
  }
}
