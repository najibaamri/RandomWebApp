import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css'],
})
export class ClientHomeComponent implements OnInit {
  role: string;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

  // Logout Function
  logout() {
    this.authService.logout();
    // this.router.navigateByUrl('/login');
  }
}
