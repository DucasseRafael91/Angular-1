import { Injectable } from '@angular/core';
import { Order } from '../components/order/order.model';
import { Training } from '../components/trainings/trainings.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  private readonly storageKey = 'orders';

  constructor() {}

  createOrder(trainings: Training[]): Order {
    const newOrder = new Order(this.orders.length + 1, trainings,new Date());
    this.orders.push(newOrder);
    localStorage.setItem(this.storageKey, JSON.stringify(this.orders));
    return newOrder;
  }

  getOrders(): Order[] {
    return this.orders;
  }
  
}
