import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToolbarLeftComponent } from './ui-toolbar-left.component';

describe('UiToolbarLeftComponent', () => {
  let component: UiToolbarLeftComponent;
  let fixture: ComponentFixture<UiToolbarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiToolbarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiToolbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
