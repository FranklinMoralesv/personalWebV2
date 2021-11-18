import { TestBed } from '@angular/core/testing';

import { LazyLoadStatusService } from './lazy-load-status.service';

describe('LazyLoadStatusService', () => {
  let service: LazyLoadStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyLoadStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
