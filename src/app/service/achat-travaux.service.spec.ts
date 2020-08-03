import { TestBed } from '@angular/core/testing';

import { AchatTravauxService } from './achat-travaux.service';

describe('AchatTravauxService', () => {
  let service: AchatTravauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchatTravauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
