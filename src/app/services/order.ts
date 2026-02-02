import { Injectable } from '@angular/core';
import { Order } from '../components/order/order.model';
import { Training } from '../components/trainings/trainings.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  private readonly storageKey = 'orders';

  constructor() {
    const storedOrders = localStorage.getItem(this.storageKey);
    if (storedOrders) {
      this.orders = JSON.parse(storedOrders);
    }
  }

  createOrder(trainings: Training[]): Order {
    const newOrder = new Order(this.orders.length + 1, trainings,new Date());
    this.orders.push(newOrder);
    this.saveOrders();
    return newOrder;
  }

  getOrders(): Order[] {
    return this.orders;
  }
  
  private saveOrders(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.orders));
  }
}
