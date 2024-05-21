import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentProfileComponent } from './establishment-profile.component';

describe('EstablishmentProfileComponent', () => {
  let component: EstablishmentProfileComponent;
  let fixture: ComponentFixture<EstablishmentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablishmentProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EstablishmentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
