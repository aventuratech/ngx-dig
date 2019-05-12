import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCollectionComponent } from './db-collection.component';

describe('DbCollectionComponent', () => {
  let component: DbCollectionComponent;
  let fixture: ComponentFixture<DbCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
