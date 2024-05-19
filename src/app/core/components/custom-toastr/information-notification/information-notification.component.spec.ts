import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationNotificationComponent } from './information-notification.component';

describe('InformationNotificationComponent', () => {
  let component: InformationNotificationComponent;
  let fixture: ComponentFixture<InformationNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
