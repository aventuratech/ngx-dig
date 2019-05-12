import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailSigninComponent } from './auth-email-signin.component';

describe('AuthEmailSigninComponent', () => {
  let component: AuthEmailSigninComponent;
  let fixture: ComponentFixture<AuthEmailSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthEmailSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthEmailSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
