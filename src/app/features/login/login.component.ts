import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInDto } from 'src/app/core/models/user.dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';

import { SuccessNotificationComponent } from 'src/app/core/components/custom-toastr/success-notification/success-notification.component';
import { IndividualConfig } from 'ngx-toastr/toastr/toastr-config';
import { ErrorNotificationComponent } from 'src/app/core/components/custom-toastr/error-notification/error-notification.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: SignInDto = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  showSuccessfulLoginMessage(message: string) {
    const config: Partial<IndividualConfig> = {
      toastComponent: SuccessNotificationComponent,
      enableHtml: true,
      closeButton: false,
      tapToDismiss: true,
    };

    const toastRef = this.toastr.show(message, '', config);
    if (toastRef && toastRef.toastRef) {
      toastRef.toastRef.componentInstance.message = message;
    }
  }

  showUnsuccessfulLoginMessage(title: string, message: string) {
    const config: Partial<IndividualConfig> = {
      toastComponent: ErrorNotificationComponent,
      enableHtml: true,
      closeButton: false,
      tapToDismiss: true,
    };

    const toastRef = this.toastr.show(message, title, config);
    if (toastRef && toastRef.toastRef) {
      toastRef.toastRef.componentInstance.title = title;
      toastRef.toastRef.componentInstance.message = message;
    }
  }

  onLogin() {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        this.showSuccessfulLoginMessage('Connexion réussie');

        this.router.navigate(['/home']);
      },
      (error) => {
        this.showUnsuccessfulLoginMessage(
          'Connexion échouée',
          'Veuillez vérifier vos identifiants',
        );
        console.error(error);
      },
    );
  }

  findAllUsers() {
    this.userService.findAllUsers().subscribe(
      (response) => {
        // Gérer la réponse du serveur ici
        console.log(response);
      },
      (error) => {
        // Gérer l'erreur ici
        console.error(error);
      },
    );
  }
}
