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
    private dialog: MatDialog,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listTrainings = [
      { id: 1, name: 'Java', description: 'Formation Java SE 8 sur 5 jours', price: 1500, quantity: 1, image: 'images/java.png' },
      { id: 2, name: 'DotNet', description: 'Formation DotNet 3 jours', price: 1000, quantity: 1, image: 'images/dotnet.png' },
      { id: 3, name: 'Python', description: 'Formation Python/Django 5 jours', price: 1500, quantity: 1, image: 'images/python.png' }
    ];
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
    const category = searchTerm ?? this.categoryTerm;
    const price = priceTerm ?? this.priceTerm;

    this.filteredTrainings = this.listTrainings.filter(training => {
      const matchesName = category ? training.name.toLowerCase().includes(category.toLowerCase()) : true;
      const matchesPrice = price ? training.price <= price : true;
      return matchesName && matchesPrice;
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
