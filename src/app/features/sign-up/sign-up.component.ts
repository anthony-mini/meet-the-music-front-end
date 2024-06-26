import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CreateUserDto } from 'src/app/core/models/user.dto';
import { UserService } from 'src/app/core/services/user.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Role } from '../../core/enums/role.enum';
import { Router, RouterLink } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { ErrorNotificationComponent } from 'src/app/core/components/custom-toastr/error-notification/error-notification.component';
import { SuccessNotificationComponent } from 'src/app/core/components/custom-toastr/success-notification/success-notification.component';
import { IndividualConfig } from 'ngx-toastr/toastr/toastr-config';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';
import { ZipcodeData, ZIP_CODE_DATA } from '../../core/interfaces/zipcode-data';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;
  isSubmitted = false;
  zipcodeData: ZipcodeData = ZIP_CODE_DATA;
  zipcodes: string[] = Object.keys(this.zipcodeData);

  refex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

  constructor(
    private userService: UserService,
    private router: Router,
    private errorHandlerService: ErrorHandlerService,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: [Role.ARTIST, Validators.required],
      zipCode: ['', Validators.required],
      city: [{ value: '', disabled: true }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.userForm.get('zipCode')?.valueChanges.subscribe((zipcode) => {
      this.userForm.get('city')?.setValue(this.zipcodeData[zipcode]);
    });
  }

  onSubmitRegistration() {
    this.isSubmitted = true;

    if (this.userForm.invalid) {
      this.showUnsuccessfulSignUpMessage(
        'Formulaire invalide',
        'Veuillez remplir tous les champs du formulaire.',
      );
      return;
    }

    if (!this.refex.test(this.userForm.get('password')?.value)) {
      this.showUnsuccessfulSignUpMessage(
        'Mot de passe faible',
        '8+ caractères, 1 majuscule, 1 chiffre minimum.',
      );
      return;
    }

    // Temporarily enable the city field to get its value
    this.userForm.get('city')?.enable();
    const user: CreateUserDto = this.userForm.value;
    // Disable the city field again
    this.userForm.get('city')?.disable();

    this.userService
      .createUser(user)
      .pipe(
        catchError((error) => {
          console.error('Error creating user:', error);
          return of(null); // Retourne un Observable résoluble en cas d'erreur
        }),
      )
      .subscribe((response) => {
        if (response) {
          this.showSuccessSignUpMessage(
            'Utilisateur créé avec succès. \n Vous pouvez maintenant vous connecter.',
          );
          this.router.navigate(['/login']);
        } else {
          this.errorHandlerService.handleError(
            "Erreur lors de la création de l'utilisateur.",
          );
        }
      });
  }

  showUnsuccessfulSignUpMessage(title: string, message: string) {
    const config: Partial<IndividualConfig> = {
      toastComponent: ErrorNotificationComponent,
      enableHtml: true,
      closeButton: false,
      tapToDismiss: true,
      positionClass: 'toast-bottom-left',
    };

    const toastRef = this.toastr.show(message, title, config);
    if (toastRef && toastRef.toastRef) {
      toastRef.toastRef.componentInstance.title = title;
      toastRef.toastRef.componentInstance.message = message;
    }
  }

  showSuccessSignUpMessage(message: string) {
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
}
