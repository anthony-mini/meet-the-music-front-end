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
    console.log(newUser);

    newUser = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'test@email.fr',
      password: 'password',
      phone: '0123456789',
    };

    console.log(newUser);

    const body = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test1232@emil.fr',
      password: 'password',
      phone: '0123456789',
      role: 'user',
    };

    return this.http.post(`${this.baseUrl}/users`, body);
  }

  findAllUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${this.baseUrl}/users`);
  }
}
