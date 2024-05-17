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
      .get(`${this.baseUrl}/auth/token`, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          // Traitez la réponse si nécessaire
          // Les cookies sont automatiquement gérés par le navigateur
          this.userData.next(response);
          console.log('Logged in successfully', response);
        }),
      );
  }

  logout() {
    this.http
      .post(`${this.baseUrl}/auth/token/logout`, {}, { withCredentials: true })
      .subscribe(() => {
        this.userData.next(false);
        console.log('Logged out successfully');
      });
  }

  isLoggedIn(): boolean {
    return !!this.userData.value;
  }

  getUserInformation(): any {
    return this.http
      .get(`${this.baseUrl}/auth/token/me`, { withCredentials: true })
      .pipe(tap((data) => this.userData.next(data)));
  }

  getUserData(): Observable<any> {
    return this.userData.asObservable();
  }
}
