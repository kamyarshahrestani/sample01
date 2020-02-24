import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Subscription } from 'rxjs';
import { Customer } from '../core/customer';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit, OnDestroy {
  public customers: Array<Customer>;
  private subscriptions: Subscription = new Subscription();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.customerService.getCustomers()
        .subscribe((customers: Array<Customer>) => {
          this.customers = customers;
          console.log(this.customers);
        }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

