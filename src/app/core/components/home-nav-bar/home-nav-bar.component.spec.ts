import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeNavBarComponent } from './home-nav-bar.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HomeNavBarComponent', () => {
  let component: HomeNavBarComponent;
  let fixture: ComponentFixture<HomeNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNavBarComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 'testId' }) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
