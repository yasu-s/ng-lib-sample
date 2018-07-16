import { TestBed, inject } from '@angular/core/testing';

import { SampleLib1Service } from './sample-lib1.service';

describe('SampleLib1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleLib1Service]
    });
  });

  it('should be created', inject([SampleLib1Service], (service: SampleLib1Service) => {
    expect(service).toBeTruthy();
  }));
});
