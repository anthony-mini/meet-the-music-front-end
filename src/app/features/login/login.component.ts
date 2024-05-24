import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { of, catchError } from 'rxjs';

import { SignInDto } from 'src/app/core/models/user.dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

import { ToastrService } from 'ngx-toastr';
import { SuccessNotificationComponent } from 'src/app/core/components/custom-toastr/success-notification/success-notification.component';
import { IndividualConfig } from 'ngx-toastr/toastr/toastr-config';
import { ErrorNotificationComponent } from 'src/app/core/components/custom-toastr/error-notification/error-notification.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userForm: FormGroup;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmitSignIn() {
    this.isSubmitted = true;

    if (this.userForm.invalid) {
      this.showUnsuccessfulLoginMessage(
        'Formulaire invalide',
        'Veuillez remplir tous les champs du formulaire.',
      );
      return;
    }

    const user: SignInDto = this.userForm.value;

    this.authService
      .login(user.email, user.password)
      .pipe(
        catchError((error) => {
          console.error('Error logging in:', error);
          return of(null);
        }),
      )
      .subscribe((response) => {
        if (response) {
          this.showSuccessfulLoginMessage('Connexion réussie');
          this.router.navigate(['/home']);
        } else {
          this.showUnsuccessfulLoginMessage(
            'Connexion échouée',
            'Veuillez vérifier vos identifiants',
          );
        }
      });
  }

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

  // findAllUsers() {
  //   this.userService.findAllUsers().subscribe(
  //     (response) => {
  //       // Gérer la réponse du serveur ici
  //       console.log(response);
  //     },
  //     (error) => {
  //       // Gérer l'erreur ici
  //       console.error(error);
  //     },
  //   );
  // }
}
