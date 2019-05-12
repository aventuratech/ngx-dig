import { TestBed } from '@angular/core/testing';

import { NgxDigService } from './ngx-dig.service';

describe('NgxDigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDigService = TestBed.get(NgxDigService);
    expect(service).toBeTruthy();
  });
});
