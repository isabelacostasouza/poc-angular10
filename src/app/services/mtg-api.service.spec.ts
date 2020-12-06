import { TestBed } from '@angular/core/testing';

import { MtgApiService } from './mtg-api.service';

describe('MtgApiService', () => {
  let service: MtgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
