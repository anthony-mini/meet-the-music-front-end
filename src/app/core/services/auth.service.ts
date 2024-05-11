import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.meetthemusicBackendUrl;
  }

  login(email: string, password: string) {
    // Encode les informations d'identification en base64
    const encodedCredentials = btoa(`${email}:${password}`);

    return this.http
      .get<{ access_token: string }>(`${this.baseUrl}/auth/token`, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('access_token', response.access_token);
        }),
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getToken(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('access_token');
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.getToken();
  }
}
