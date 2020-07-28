import { TestBed } from '@angular/core/testing';

import { SteTravauxService } from './ste-travaux.service';

describe('SteTravauxService', () => {
  let service: SteTravauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteTravauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
