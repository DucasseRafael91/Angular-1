import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiTrainingService } from '../../services/api-training-service';
import { Training } from '../trainings/trainings.model';
import { ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-categorymenu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categorymenu.html',
  styleUrls: ['./categorymenu.css'],
})
export class CategoryMenuComponent implements OnInit {

  constructor(private readonly apiTrainingService: ApiTrainingService, private readonly changeDetector: ChangeDetectorRef) {}

  listTrainings: Training[] = [];
  uniqueCategories: string[] = [];

  categoryTerm: string = 'all';
  priceTerm: number = 0;

  @Output() categoryChange = new EventEmitter<string>();
  @Output() priceChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.getAllTrainings();
    const categoriesSet = new Set<string>();
    this.listTrainings.forEach(t => categoriesSet.add(t.category));
    this.uniqueCategories = Array.from(categoriesSet);
  }

  getAllTrainings() {
  this.apiTrainingService.getTrainings().subscribe({
    next: (data) => {this.listTrainings = data ;
    },
  });
}

  onFilterChange() {
    this.categoryChange.emit(this.categoryTerm);
    this.priceChange.emit(this.priceTerm);
  }
}
