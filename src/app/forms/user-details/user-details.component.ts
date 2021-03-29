import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { PaymentService } from 'src/app/payment.service';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  userForm: FormGroup


  constructor(public _snackbar: MatSnackBar,public fb: FormBuilder, public paymentService: PaymentService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: uuid(),
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      email:['', Validators.required],
      monthly_budget:['', Validators.required],
      phone_number:['', Validators.required]

    })
  }




  // Snackbar Messages
  openSnackBarSuccess(){
    this._snackbar.open('Form Submitted Successfully', 'End Now', {
      duration: 15000
    })
  }

  openSnackBarError(){
    this._snackbar.open('Error in submitting', 'End Now', {
      duration: 15000
    })
  }

  // Clear Form

  clearForm(){
    this.userForm.reset()
  }

  // Create User
  createUser() {
    let user = this.userForm.value

    this.paymentService.postUser(user).subscribe(
        (success) => {
          this.openSnackBarSuccess()
        },
        (error) => {
          this.openSnackBarError()
        }
    );
  }
}
