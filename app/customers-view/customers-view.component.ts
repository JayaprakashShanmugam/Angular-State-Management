import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/customer'; 
import {select, Store} from '@ngrx/store'; 
import {Observable} from 'rxjs';
import {CustomerRemove} from '../customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})

export class CustomersViewComponent implements OnInit {
  
  customers: Observable<Customer[]>;
  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select('customers'));
  }

  ngOnInit(): void {
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }
}
