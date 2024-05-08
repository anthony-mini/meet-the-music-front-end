import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateUserDto } from 'src/app/core/models/user.dto';
import { UserService } from 'src/app/core/services/user.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Role } from '../../core/enums/role.enum';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  user: CreateUserDto = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    role: 'artist' as Role,
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private errorHandlerService: ErrorHandlerService,
  ) {}

  onSubmit() {
    this.userService
      .createUser(this.user)
      .pipe(
        catchError((error) => {
          console.error('Error creating user:', error);
          return of(null); // Retourne un Observable résoluble en cas d'erreur
        }),
      )
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/login']);
        } else {
          this.errorHandlerService.handleError(
            "Erreur lors de la création de l'utilisateur.",
          );
        }
      });
  }
}
