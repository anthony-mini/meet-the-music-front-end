import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { UserDto, CreateUserDto } from '../models/user.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string;
  constructor(public http: HttpClient) {
    this.baseUrl = environment.meetthemusicBackendUrl;
  }

  createUser(newUser: CreateUserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, newUser);
  }
}
