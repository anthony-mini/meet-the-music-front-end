import { Component, OnInit } from '@angular/core';
import { ArtistProfileService } from '../../core/services/artist-profile.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProfileCardsComponent } from 'src/app/core/components/profile-cards/profile-cards.component';

@Component({
  selector: 'app-artist-profile',
  standalone: true,
  imports: [NgFor, ProfileCardsComponent],
  templateUrl: './artist-profile.component.html',
  styleUrl: './artist-profile.component.scss',
})
export class ArtistProfileComponent implements OnInit {
  alias!: string;
  artist: any;
  initials!: string;
  createdDate!: string;

  constructor(
    private artistProfileService: ArtistProfileService,
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
    this.artistProfileService
      .getProfileByAlias(this.alias)
      .subscribe((profile) => {
        this.artist = profile.artistProfile;
        this.initials = profile.initials;

        const date = new Date(profile.artistProfile.createdAt);
        this.createdDate = date.toLocaleDateString('fr-FR', {
          month: 'long',
          year: 'numeric',
        });
      });
  }
}
