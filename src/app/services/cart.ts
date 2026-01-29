import { Injectable } from '@angular/core';
import { Training } from '../components/trainings/trainings.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Training[] = [];

  constructor() { }

  addTraining(training: Training) {
    this.cart.push({...training}); 
  }

deleteTraining(training: Training) {
  this.cart = this.cart.filter(t => t.id !== training.id);
}

validateCart() {
  this.cart = [];
}

  getCart(): Training[] {
    return this.cart;
  }
}
