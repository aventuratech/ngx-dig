import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToolbarRightComponent } from './ui-toolbar-right.component';

describe('UiToolbarRightComponent', () => {
  let component: UiToolbarRightComponent;
  let fixture: ComponentFixture<UiToolbarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiToolbarRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiToolbarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
