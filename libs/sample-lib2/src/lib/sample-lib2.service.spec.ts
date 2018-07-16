import { TestBed, inject } from '@angular/core/testing';

import { SampleLib2Service } from './sample-lib2.service';

describe('SampleLib2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleLib2Service]
    });
  });

  it('should be created', inject([SampleLib2Service], (service: SampleLib2Service) => {
    expect(service).toBeTruthy();
  }));
});
