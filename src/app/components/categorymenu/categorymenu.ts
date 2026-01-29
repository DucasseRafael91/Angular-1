import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorymenu',
  imports: [FormsModule],
  templateUrl: './categorymenu.html',
  styleUrls: ['./categorymenu.css'],
})
export class CategoryMenuComponent {
  categoryTerm: string = '';
  priceTerm: number = 0;

  @Output() categoryChange = new EventEmitter<string>();
  @Output() priceChange = new EventEmitter<number>();

  onSearchChange() {
    this.categoryChange.emit(this.categoryTerm);
    this.priceChange.emit(this.priceTerm);
  }
}
