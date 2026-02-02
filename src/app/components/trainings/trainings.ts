import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Training } from './trainings.model';
import { CartService } from '../../services/cart';
import { TrainingModalComponent } from '../training-modal/training-modal';
import { NavBarComponent } from '../navbar/navbar';
import { SearchBarComponent } from '../searchbar/searchbar';
import { CategoryMenuComponent } from '../categorymenu/categorymenu'
import trainings from '../../datas/trainings.json';

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

  constructor(private readonly dialog: MatDialog,private readonly cartService: CartService) {}

  ngOnInit(): void {
  this.listTrainings = trainings;
  this.filteredTrainings = this.listTrainings;
  }

  searchTerm: string = '';
  categoryTerm: string = '';
  priceTerm: number = 0;

  onCategoryChange(term: string) {
    this.categoryTerm = term;
    this.onSearch();
  }

    onSearchChange(search: string) {
    this.searchTerm = search;
    this.onSearch();
  }

  onPriceChange(price: number) {
    this.priceTerm = price;
    this.onSearch();
  }

onSearch(searchTerm?: string, categoryTerm?: string, priceTerm?: number) {
  const search = (searchTerm ?? this.searchTerm)?.toLowerCase();
  const category = (categoryTerm ?? this.categoryTerm)?.toLowerCase();
  const price = priceTerm ?? this.priceTerm;

  this.filteredTrainings = this.listTrainings.filter(training => {

    let matchesCategory: boolean;
    if (category) {
      matchesCategory = training.category.toLowerCase().includes(category);
    } 
    else {
      matchesCategory = true;
    }

    let matchesPrice: boolean;
    if (price) {
      matchesPrice = training.price <= price;
    } else {
      matchesPrice = true;
    }

    let matchesSearch: boolean;
    if (search) {
      matchesSearch = training.name.toLowerCase().includes(search) || training.description.toLowerCase().includes(search);
    } else {
      matchesSearch = true;
    }

    return matchesCategory && matchesPrice && matchesSearch;
  });
}

  openDialog(training: Training) {
    this.dialog.open(TrainingModalComponent, {
      width: '400px',
      data: training
    });
  }

onAddToCart(training: Training, quantityToAdd: number = training.quantity) {
  const cartItems = this.cartService.getCart();

  const existingItem = cartItems.find(item => item.id === training.id);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + quantityToAdd;
  } else {
    training.quantity = quantityToAdd;
    this.cartService.addTraining(training);
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
}


}