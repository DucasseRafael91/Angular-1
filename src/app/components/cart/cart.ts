import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';
import { Training } from '../trainings/trainings.model';
import { NavBarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class CartComponent implements OnInit {
  listTrainings: Training[] = [];

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.listTrainings = this.cartService.getCart();
  }

  onDeleteToCart(training: Training) {
    this.cartService.deleteTraining(training);
    globalThis.location.reload();
  }

    onValidateToCart() {
    this.cartService.validateCart();
    alert("Commande Validé");
    globalThis.location.reload();
  }

getTotal(): number {
  let total = 0;

  for (const training of this.listTrainings) {
    const price = training.price;
    const quantity = training.quantity;
    const trainingTotal = price * quantity;

    total = total + trainingTotal;
  }
  return total;
}
}
