import { TestBed, inject } from '@angular/core/testing';

import { AisecService } from './aisec.service';

describe('AisecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AisecService]
    });
  });

  it('should be created', inject([AisecService], (service: AisecService) => {
    expect(service).toBeTruthy();
  }));
});
