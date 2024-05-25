import { Component, OnInit } from '@angular/core';
import { EstablishmentProfileService } from '../../core/services/establishment-profile.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-establishment-profile',
  standalone: true,
  imports: [],
  templateUrl: './establishment-profile.component.html',
  styleUrl: './establishment-profile.component.scss',
})
export class EstablishmentProfileComponent implements OnInit {
  alias!: string;
  artistProfile: any;

  constructor(
    private establishmentProfileService: EstablishmentProfileService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Subscribe to the route parameters and load the artist profile whenever they change
    this.route.params.subscribe((params) => {
      this.alias = params['alias'];
      this.loadArtistProfile();
    });
  }

  loadArtistProfile(): void {
    this.establishmentProfileService
      .getProfileByAlias(this.alias)
      .subscribe((profile) => {
        this.establishmentProfileService = profile;
      });
  }
}
