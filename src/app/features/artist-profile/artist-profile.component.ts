import { Component, OnInit } from '@angular/core';
import { ArtistProfileService } from '../../core/services/artist-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-profile',
  standalone: true,
  imports: [],
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
    // Get the alias from the URL and load the artist profile
    this.alias = this.route.snapshot.paramMap.get('alias')!;
    this.loadArtistProfile();
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

        console.log(this.artist);
        console.log(this.initials);
        console.log(this.createdDate);
      });
  }
}
