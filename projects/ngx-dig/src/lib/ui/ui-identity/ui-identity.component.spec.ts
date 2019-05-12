import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIdentityComponent } from './ui-identity.component';

describe('UiIdentityComponent', () => {
  let component: UiIdentityComponent;
  let fixture: ComponentFixture<UiIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
