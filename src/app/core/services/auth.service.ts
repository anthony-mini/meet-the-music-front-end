import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string;
  private userData = new BehaviorSubject<any>(null);

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
          this.getUserInformation().subscribe(); // Load user info after login
        }),
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.userData.next(null); // clear userData on logout
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

  getUserInformation(): any {
    if (localStorage) {
      return this.http
        .get(`${this.baseUrl}/auth/token/me`)
        .pipe(tap((data) => this.userData.next(data)));
    }
  }

  getUserData(): Observable<any> {
    return this.userData.asObservable();
  }
}
