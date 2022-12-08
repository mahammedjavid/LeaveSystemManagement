import { TestBed } from '@angular/core/testing';

import { PvtserviceService } from './pvtservice.service';

describe('PvtserviceService', () => {
  let service: PvtserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvtserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
