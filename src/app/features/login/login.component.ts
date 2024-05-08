import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateUserDto } from 'src/app/core/models/user.dto';
import { UserService } from 'src/app/core/services/user.service';
import { Role } from '../../core/enums/role.enum';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: CreateUserDto = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    role: Role.USER,
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log(this.user);

        // Gérer la réponse du serveur ici
        console.log(response);
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
