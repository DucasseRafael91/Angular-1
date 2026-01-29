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
    alert("Commande Effectué");
    globalThis.location.reload();
  }

  getTotal(): number {
  return this.listTrainings.reduce(
    (total, training) => total + (training.price * training.quantity),
    0
  );
}

}
