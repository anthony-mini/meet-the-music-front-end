import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { StatItemComponent } from 'src/app/core/components/stat-item/stat-item.component';
import { ServiceItemComponent } from 'src/app/core/components/service-item/service-item.component';
import { CtaConnexionComponent } from 'src/app/core/components/cta-connexion/cta-connexion.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SearchItemComponent } from 'src/app/core/components/search-item/search-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    BannerComponent,
    StatItemComponent,
    ServiceItemComponent,
    CtaConnexionComponent,
    SearchItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  userData: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }
}
