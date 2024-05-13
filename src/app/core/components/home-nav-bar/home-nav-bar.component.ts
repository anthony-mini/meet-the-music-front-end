import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-nav-bar.component.html',
  styleUrl: './home-nav-bar.component.scss',
})
export class HomeNavBarComponent implements OnInit {
  mobileMenuOpen = false;
  userData: any;

  constructor(private authService: AuthService) {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  isLogged() {
    return this.authService.isLoggedIn();
  }

  onLogout() {
    return this.authService.logout();
  }

  ngOnInit(): void {
    this.isLogged();

    this.authService.getUserData().subscribe((userData) => {
      console.log(userData);
    });
  }
}
