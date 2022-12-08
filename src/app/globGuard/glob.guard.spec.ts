import { TestBed } from '@angular/core/testing';

import { GlobGuard } from './glob.guard';

describe('GlobGuard', () => {
  let guard: GlobGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GlobGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
