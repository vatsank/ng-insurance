import { TestBed, inject } from '@angular/core/testing';

import { VechcileInsuranceResolverService } from './vechcile-insurance-resolver.service';

describe('VechcileInsuranceResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VechcileInsuranceResolverService]
    });
  });

  it('should be created', inject([VechcileInsuranceResolverService], (service: VechcileInsuranceResolverService) => {
    expect(service).toBeTruthy();
  }));
});
