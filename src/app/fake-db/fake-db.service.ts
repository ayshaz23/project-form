import { Injectable } from '@angular/core';
import { User } from './user';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService {

  constructor() { }

  createDb(): any{
    return {

      'user_data': User.user_data,
    }
  }
}
