import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../Environnement';
import { Order } from '../../../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiOrder {

  constructor(private readonly http: HttpClient) { }

  public createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.host}/orders`, order);
  }

  public getOrdersByUser(userId: string): Observable<Order[]> {
    console.log('Fetching orders for userId:', userId);
    return this.http.get<Order[]>(`${environment.host}/orders?userId=${userId}`);
  }

public getOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(`${environment.host}/orders`);
}

}
