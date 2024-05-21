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
  artistProfile: any;

  constructor(
    private artistProfileService: ArtistProfileService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.alias = this.route.snapshot.paramMap.get('alias')!;
    this.loadArtistProfile();
  }

  loadArtistProfile(): void {
    this.artistProfileService
      .getProfileByAlias(this.alias)
      .subscribe((profile) => {
        this.artistProfile = profile;
      });
  }
}
