import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../core/customer';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private static serviceKeyControlName = 'customer';
  private readonly baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {

    this.baseUrl = baseUrl;
  }

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get(`${this.baseUrl}${CustomerService.serviceKeyControlName}`)
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
      );;
  }
}
