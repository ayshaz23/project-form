import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from "@angular/material/toolbar";
import { UserTableComponent } from './user-table/user-table.component';



const routes: Routes = [
  {
    path: '',
    component: UserTableComponent
  },

  {
    path: 'user-details',
    component: UserDetailsComponent
  }
]

@NgModule({
  declarations: [UserDetailsComponent, UserTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports:[UserDetailsComponent
  ]
})
export class FormsModule { }
