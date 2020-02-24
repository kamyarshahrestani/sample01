import * as moment from 'moment';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';
import { Customer } from '../core/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get(`${AppConfig.serviceBaseUrl}${AppConfig.customerControllerRoot}`)
      .pipe(
        map((customers: Array<any>) => {
          const result: Array<Customer> = [];
          customers.forEach(item => {
            const customer: Customer = item;

            // add two custom field at client side
            customer.shortContractStartDate = moment(customer.contractStartDate)
              .format('L');
            customer.shortContractEndDate = moment(customer.contractEndDate)
              .format('L');

            result.push(customer);
          });
          return result;
        })
      );
  }
}
