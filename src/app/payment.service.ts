import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './fake-db/user';
import {User_Details} from './forms/user-table/user-table.component'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public httpClient: HttpClient) { }



  // postUser(payLoad){
  //   return this.httpClient.post('api/user_data', payLoad)

  // }

  getUser(): Observable<User_Details>{
    return this.httpClient.get<User_Details>('api/user_data')

  }
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>('api/user_data', user);
}
}
