import { Component, OnInit } from '@angular/core';
import { EstablishmentProfileService } from '../../../core/services/establishment-profile.service';
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
    // Get the alias from the URL and load the establishment profile
    this.alias = this.route.snapshot.paramMap.get('alias')!;
    this.loadArtistProfile();
  }

  loadArtistProfile(): void {
    this.establishmentProfileService
      .getProfileByAlias(this.alias)
      .subscribe((profile) => {
        this.establishmentProfileService = profile;
      });
  }
}
