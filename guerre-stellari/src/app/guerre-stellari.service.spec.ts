import { TestBed } from '@angular/core/testing';

import { GuerreStellariService } from './guerre-stellari.service';

describe('GuerreStellariService', () => {
  let service: GuerreStellariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuerreStellariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
