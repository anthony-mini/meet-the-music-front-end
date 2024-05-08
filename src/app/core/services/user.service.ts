import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { UserDto, CreateUserDto } from '../models/user.dto';
import { Observable } from 'rxjs';
import { Role } from '../enums/role.enum';

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
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@email.fr',
      password: 'password',
      phone: '0123456789',
      address: '1 rue de la paix',
      role: Role.USER,
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
