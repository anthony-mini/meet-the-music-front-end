import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryArtistComponent } from './discovery-artist.component';

describe('DiscoveryArtistComponent', () => {
  let component: DiscoveryArtistComponent;
  let fixture: ComponentFixture<DiscoveryArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoveryArtistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoveryArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
