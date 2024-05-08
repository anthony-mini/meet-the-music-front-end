import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateUserDto } from 'src/app/core/models/user.dto';
import { UserService } from 'src/app/core/services/user.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Role } from '../../core/enums/role.enum';
import { Router } from '@angular/router';

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
  ) {}

  onSubmit() {
    console.log(this.user);

    this.userService
      .createUser(this.user)
      .pipe(
        catchError((error) => {
          // Gérer l'erreur ici
          console.error('Error creating user:', error);
          return of(null); // Retourne un Observable résoluble en cas d'erreur
        }),
      )
      .subscribe((response) => {
        if (response) {
          // Gérer la réponse du serveur ici
          console.log(response);

          // Rediriger l'utilisateur vers une autre page
          this.router.navigate(['/login']);
        } else {
          // Gérer le cas où une erreur est capturée et le flux continue
          console.log('Aucune réponse suite à une erreur capturée.');
        }
      });
  }
}
