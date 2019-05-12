import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBrandComponent } from './ui-brand.component';

describe('UiBrandComponent', () => {
  let component: UiBrandComponent;
  let fixture: ComponentFixture<UiBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
