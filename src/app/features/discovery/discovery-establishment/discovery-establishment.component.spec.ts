import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryEstablishmentComponent } from './discovery-establishment.component';

describe('DiscoveryEstablishmentComponent', () => {
  let component: DiscoveryEstablishmentComponent;
  let fixture: ComponentFixture<DiscoveryEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoveryEstablishmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoveryEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
