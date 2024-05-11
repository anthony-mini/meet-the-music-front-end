import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInDto } from 'src/app/core/models/user.dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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
  ) {}

  onSubmit() {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        // Gérer la réponse du serveur ici
        console.log(response);
        // Rediriger l'utilisateur vers une autre page
        this.router.navigate(['/home']);
      },
      (error) => {
        // Gérer l'erreur ici
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
