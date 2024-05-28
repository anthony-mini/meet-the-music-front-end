import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardsComponent } from './profile-cards.component';

describe('ProfileCardsComponent', () => {
  let component: ProfileCardsComponent;
  let fixture: ComponentFixture<ProfileCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
