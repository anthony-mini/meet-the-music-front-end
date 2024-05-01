import { Component } from '@angular/core';
import { HomeNavBarComponent } from '../../core/components/home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeNavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
