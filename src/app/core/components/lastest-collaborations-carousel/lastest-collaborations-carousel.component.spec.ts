import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestCollaborationsCarouselComponent } from './lastest-collaborations-carousel.component';

describe('LastestCollaborationsCarouselComponent', () => {
  let component: LastestCollaborationsCarouselComponent;
  let fixture: ComponentFixture<LastestCollaborationsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastestCollaborationsCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LastestCollaborationsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
