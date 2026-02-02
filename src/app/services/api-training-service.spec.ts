import { TestBed } from '@angular/core/testing';

import { ApiTrainingService } from './api-training-service';

describe('ApiTrainingService', () => {
  let service: ApiTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
