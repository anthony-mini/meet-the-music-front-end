import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeNavBarComponent } from '../../core/components/home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomeNavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
