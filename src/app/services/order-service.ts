import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Training } from '../models/trainings.model';
import { Customer } from '../models/customers.model';
import { ApiOrder } from '../services/API/apiOrder/api-order';
import { AuthService } from '../services/Authentification/auth-service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  private readonly storageKey = 'orders';
  error: string | null = null;

  constructor(private apiOrder: ApiOrder, private authService: AuthService) {
    const storedOrders = localStorage.getItem(this.storageKey);
    if (storedOrders) {
      this.orders = JSON.parse(storedOrders);
    }
  }

  // Crée une commande avec le client fourni
  createOrder(trainings: Training[], customer: Customer): Order {
    const user = this.authService.getUser();
    console.log('Utilisateur actuel :', user);

    const newOrder = new Order(
      this.orders.length + 1,
      trainings,
      customer,
      new Date(),
      user
    );

    this.apiOrder.createOrder(newOrder).subscribe({
      next: () => alert('Commande créée avec succès 🎉'),
      error: () => alert('Erreur lors de la création de la commande.')
    });

    return newOrder;
  }

  // Récupérer toutes les commandes
  getOrdersList(): void {
    this.apiOrder.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
        console.log('Toutes les commandes récupérées :', this.orders);
      },
      error: (err) => {
        this.error = err.message;
        console.error('Erreur API :', err);
        this.orders = [];
      },
      complete: () => {
        console.log('Récupération des commandes terminée.');
      }
    });
  }

  // Getter pour récupérer les commandes depuis le composant
  getOrders(): Order[] {
    return this.orders;
  }
}
