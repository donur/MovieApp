import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkqNpTXAU4pqHWIaAUn5PaEjynSJxNKmc';
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
