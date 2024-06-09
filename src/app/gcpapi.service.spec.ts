import { TestBed } from '@angular/core/testing';

import { GcpapiService } from './gcpapi.service';

describe('GcpapiService', () => {
  let service: GcpapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcpapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
