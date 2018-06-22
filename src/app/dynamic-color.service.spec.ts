import { TestBed, inject } from '@angular/core/testing';

import { DynamicColorService } from './dynamic-color.service';

describe('DynamicColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicColorService]
    });
  });

  it('should be created', inject([DynamicColorService], (service: DynamicColorService) => {
    expect(service).toBeTruthy();
  }));
});
