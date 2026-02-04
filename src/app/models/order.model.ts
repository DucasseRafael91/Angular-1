import { Customer } from './customers.model';
import { Training } from './trainings.model';
import { User } from './user.model';

export class Order {

  constructor( public id: number, public trainings: Training[], public customer: Customer, public date: Date = new Date(), public user: User) {}
  
}
