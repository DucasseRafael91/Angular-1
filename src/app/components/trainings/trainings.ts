import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Training } from './trainings.model';
import { CartService } from '../../services/cart';
import { TrainingModalComponent } from '../training-modal/training-modal';
import { NavBarComponent } from '../navbar/navbar';
import { SearchBarComponent } from '../searchbar/searchbar';
import { CategoryMenuComponent } from '../categorymenu/categorymenu'
import trainings from './trainings.json';

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent,SearchBarComponent,CategoryMenuComponent],
  templateUrl: './trainings.html',
  styleUrls: ['./trainings.css'],
})
export class TrainingComponent implements OnInit {

  listTrainings: Training[] = [];
  filteredTrainings: Training[] = []; 

  constructor(
    private readonly dialog: MatDialog,
    private readonly cartService: CartService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
  this.listTrainings = trainings;
  this.filteredTrainings = this.listTrainings;
  }

  categoryTerm: string = '';
  priceTerm: number = 0;

  onCategoryChange(term: string) {
    this.categoryTerm = term;
    this.onSearch();
  }

  onPriceChange(price: number) {
    this.priceTerm = price;
    this.onSearch();
  }

onSearch(searchTerm?: string, priceTerm?: number) {
  const category = (searchTerm ?? this.categoryTerm)?.toLowerCase();
  const price = priceTerm ?? this.priceTerm;

  this.filteredTrainings = this.listTrainings.filter(training => {
    let matchesCategory: boolean;

    if (!category) {
      matchesCategory = true;
    } else if (category === "toutes") {
      matchesCategory = true;
    } else {
      matchesCategory = training.category.toLowerCase().includes(category);
    }

    let matchesPrice: boolean;

    if (price) {
      matchesPrice = training.price <= price;
    } else {
      matchesPrice = true;
    }

    return matchesCategory && matchesPrice;
  });
}



  openDialog(training: Training) {
    this.dialog.open(TrainingModalComponent, {
      width: '400px',
      data: training
    });
  }

  onAddToCart(training: Training) {
    this.cartService.addTraining(training);
    this.router.navigateByUrl('cart');
  }
}
