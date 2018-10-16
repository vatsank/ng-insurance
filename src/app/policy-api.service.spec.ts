import { TestBed, inject } from '@angular/core/testing';

import { PolicyAPIService } from './policy-api.service';

describe('PolicyAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolicyAPIService]
    });
  });

  it('should be created', inject([PolicyAPIService], (service: PolicyAPIService) => {
    expect(service).toBeTruthy();
  }));
});
