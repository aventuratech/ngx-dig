import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDigComponent } from './ngx-dig.component';

describe('NgxDigComponent', () => {
  let component: NgxDigComponent;
  let fixture: ComponentFixture<NgxDigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
