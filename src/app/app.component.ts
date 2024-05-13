import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavBarComponent } from './core/components/home-nav-bar/home-nav-bar.component';
import { FooterComponent } from './core/components/footer/footer.component';

import { AuthService } from './core/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeNavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.authService.getUserInformation().subscribe();
      });
  }
}
