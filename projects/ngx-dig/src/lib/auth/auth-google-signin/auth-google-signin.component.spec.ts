import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGoogleSigninComponent } from './auth-google-signin.component';

describe('AuthGoogleSigninComponent', () => {
  let component: AuthGoogleSigninComponent;
  let fixture: ComponentFixture<AuthGoogleSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthGoogleSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGoogleSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
