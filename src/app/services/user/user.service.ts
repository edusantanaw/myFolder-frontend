import { Injectable } from '@angular/core';
import { env } from '../../../environments/env';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly API = env.API;

  constructor(private http: HttpClient) {}

  auth(email: string, password: string) {
    return this.http.post(`${this.API}/api/signin`, { email, password });
  }
}
