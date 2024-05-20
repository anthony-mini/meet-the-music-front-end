import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { InformationNotificationComponent } from '../custom-toastr/information-notification/information-notification.component';
import { IndividualConfig } from 'ngx-toastr/toastr/toastr-config';

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

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isLogged();

    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
    });
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
}
