import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderService } from '../../services/order';
import { Order } from '../../components/order/order.model';
import { NavBarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-order',
  templateUrl: './order.html',
  styleUrls: ['./order.css'],
  standalone: true, // 🔹 
  imports: [CommonModule, NavBarComponent, DatePipe] 
})
export class OrderComponent implements OnInit {
  listOrders: Order[] = [];

  constructor(private readonly orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.listOrders = this.orderService.getOrders();
  }
}
