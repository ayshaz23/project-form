import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { PaymentService } from 'src/app/payment.service';
import {Subject, Subscription} from 'rxjs'

import { takeUntil } from 'rxjs/operators';

export interface User_Details {
first_name: string,
last_name: string,
phone_number: number,
email: string,
monthly_budget: number
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

public temp_data

public sub :Subscription

  displayedColumns = ['first_name', 'last_name', 'email', 'phone_number', 'monthly_budget']
  dataSource: MatTableDataSource<any>;

  destroySubject$: Subject<void> = new Subject();

  constructor(public _paymentService: PaymentService) { }

  ngOnInit() {
    this.getData()
  }


  ngOnDestroy(){
    this.destroySubject$.next();

    // this.sub.unsubscribe()
  }


  // Get Data in Table
getData(){

  this._paymentService.getUser()
  .pipe(takeUntil(this.destroySubject$))
  .subscribe(response => {
    this.temp_data = response;
    this.dataSource = new MatTableDataSource (this.temp_data);
  });

  // Another Method to subscribe using Subscription

  // this.sub = this._paymentService.getUser().subscribe(
  //   response => {
  //     this.temp_data = response;
  //     this.dataSource = new MatTableDataSource (this.temp_data);
  //     console.log(response)
  //   }
  // )
}

}
