import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateUserDto } from 'src/app/core/models/user.dto';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  user!: CreateUserDto;
}
