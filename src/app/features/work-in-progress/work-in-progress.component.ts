import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-work-in-progress',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './work-in-progress.component.html',
  styleUrl: './work-in-progress.component.scss',
})
export class WorkInProgressComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
