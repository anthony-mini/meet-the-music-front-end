import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { LastestCollaborationsCarouselComponent } from 'src/app/core/components/lastest-collaborations-carousel/lastest-collaborations-carousel.component';
import { StatItemComponent } from 'src/app/core/components/stat-item/stat-item.component';
import { ServiceItemComponent } from 'src/app/core/components/service-item/service-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    BannerComponent,
    StatItemComponent,
    LastestCollaborationsCarouselComponent,
    ServiceItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
