import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiOrder } from '../../services/API/apiOrder/api-order';
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

  constructor(private readonly apiOrder: ApiOrder, private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiOrder.getOrders().subscribe({
      next: (data) => {
        this.listOrders = data;
        this.changeDetectorRef.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching orders in component:', err);
      }
    }); 
  }

}
