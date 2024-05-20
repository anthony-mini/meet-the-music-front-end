import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatItemComponent } from './stat-item.component';

describe('StatItemComponent', () => {
  let component: StatItemComponent;
  let fixture: ComponentFixture<StatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
