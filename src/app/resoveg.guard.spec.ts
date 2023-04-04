import { TestBed } from '@angular/core/testing';

import { ResovegGuard } from './resoveg.guard';

describe('ResovegGuard', () => {
  let guard: ResovegGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResovegGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
