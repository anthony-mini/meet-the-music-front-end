import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeNavBarComponent } from './home-nav-bar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

describe('HomeNavBarComponent', () => {
  let component: HomeNavBarComponent;
  let fixture: ComponentFixture<HomeNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeNavBarComponent],
      imports: [RouterModule.forRoot([])], // use RouterModule instead of RouterTestingModule
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 'testId' }) } },
        { provide: LocationStrategy, useClass: PathLocationStrategy }, // add this line
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
