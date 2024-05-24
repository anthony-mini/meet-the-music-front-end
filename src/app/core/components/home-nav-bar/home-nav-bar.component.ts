import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { InformationNotificationComponent } from '../custom-toastr/information-notification/information-notification.component';
import { IndividualConfig } from 'ngx-toastr/toastr/toastr-config';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-nav-bar',
  standalone: true,
  imports: [RouterLink, FormsModule, NgFor, NgIf],
  templateUrl: './home-nav-bar.component.html',
  styleUrl: './home-nav-bar.component.scss',
})
export class HomeNavBarComponent implements OnInit {
  mobileMenuOpen = false;
  userData: any;
  dropdownOpen = false;
  users: any[] = [];
  searchQuery: string = '';
  isSearchBarOpen = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isLogged();

    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
      this.mobileMenuOpen = false;
      this.dropdownOpen = false;
    });

    this.getUsers();
  }

  showInformationMessage(message: string) {
    const config: Partial<IndividualConfig> = {
      toastComponent: InformationNotificationComponent,
      enableHtml: true,
      closeButton: false,
      tapToDismiss: true,
    };

    const toastRef = this.toastr.show(message, '', config);
    if (toastRef && toastRef.toastRef) {
      toastRef.toastRef.componentInstance.message = message;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  isLogged() {
    return this.userData ? true : false;
  }

  onLogout() {
    try {
      this.authService.logout();
      this.showInformationMessage('Vous êtes déconnecté(e)');
    } catch (error) {
      this.router.navigate(['/']);
    }
  }

  getUsers(): void {
    this.userService.getUsers(2).subscribe((users) => {
      this.users = users;
    });
  }

  searchUsers(): void {
    if (this.searchQuery.trim() === '') {
      this.getUsers();
      return;
    } else {
      this.userService.searchUsers(this.searchQuery).subscribe((users) => {
        this.users = users;
      });
    }
  }

  onFocusOut() {
    setTimeout(() => {
      this.isSearchBarOpen = false;
    }, 100);
  }
}
