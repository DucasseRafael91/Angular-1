import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from './customers.model';
import { NavBarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, NavBarComponent],
  templateUrl: './customer.html',
  styleUrls: ['./customer.css'],
})
export class CustomerComponent {

  customer: Customer = new Customer('', '', '', '', '');

  OnSaveCustomer(customer: Customer) {
    console.log(customer);
  }
}
