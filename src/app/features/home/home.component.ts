import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../core/components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
