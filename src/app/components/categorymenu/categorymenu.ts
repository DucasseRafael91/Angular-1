import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import trainings from '../trainings/trainings.json';
import { Training } from '../trainings/trainings.model';

@Component({
  selector: 'app-categorymenu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categorymenu.html',
  styleUrls: ['./categorymenu.css'],
})
export class CategoryMenuComponent implements OnInit {

  listTrainings: Training[] = [];
  uniqueCategories: string[] = [];

  categoryTerm: string = 'all';
  priceTerm: number = 0;

  @Output() categoryChange = new EventEmitter<string>();
  @Output() priceChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.listTrainings = trainings;

    const categoriesSet = new Set<string>();
    this.listTrainings.forEach(t => categoriesSet.add(t.category));
    this.uniqueCategories = Array.from(categoriesSet);
  }

  onFilterChange() {
    this.categoryChange.emit(this.categoryTerm);
    this.priceChange.emit(this.priceTerm);
  }
}
