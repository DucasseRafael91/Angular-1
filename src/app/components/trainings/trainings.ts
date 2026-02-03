import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Training } from './trainings.model';
import { CartService } from '../../services/cart';
import { TrainingModalComponent } from '../training-modal/training-modal';
import { NavBarComponent } from '../navbar/navbar';
import { SearchBarComponent } from '../searchbar/searchbar';
import { CategoryMenuComponent } from '../categorymenu/categorymenu'
import { ApiTrainingService } from '../../services/API/apiTraining/api-training-service';

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
  error: string | null = null; // <-- Add this line

  constructor(private readonly dialog: MatDialog,private readonly cartService: CartService, private readonly apiTrainingService: ApiTrainingService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
  this.getAllTrainings();
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

getAllTrainings() {
  this.apiTrainingService.getTrainings().subscribe({
    next: (data) => {this.listTrainings = data ;
      this.filteredTrainings = this.listTrainings;
      this.changeDetector.markForCheck();
      
    },
    error: (err) => {
      this.error = err.message;
      console.error('Erreur API :', err);
    },
    complete: () => {
      console.log('Completed fetching trainings.');
    }
  });
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
    if (category && category !== 'all') {
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