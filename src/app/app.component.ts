import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavBarComponent } from './core/components/home-nav-bar/home-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'meet-the-music-front-end';
}
