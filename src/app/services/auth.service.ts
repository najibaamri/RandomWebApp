import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  public login(userInfo: Personne) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
  getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }
  // Authentication
  getusers() {
    return this.httpClient.get('http://localhost:3000/personnes');
  }

  // Return to login page
  public isLogged() {
    if (localStorage.getItem('username') == null) {
      this.router.navigateByUrl('/login');
    }
    return localStorage.getItem('username') !== null;
  }

  public get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('ACCESS_TOKEN');
    return authToken !== null ? true : false;
  }

  // Logout
  public logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('role');
  }
}
