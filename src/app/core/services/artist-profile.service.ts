import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistProfileService {
  baseUrl: string;
  constructor(public http: HttpClient) {
    this.baseUrl = environment.meetthemusicBackendUrl;
  }

  getProfileByAlias(alias: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/artist-profile/${alias}`);
  }
}
