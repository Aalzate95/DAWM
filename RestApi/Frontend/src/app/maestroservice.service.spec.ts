import { TestBed } from '@angular/core/testing';

import { MaestroserviceService } from './maestroservice.service';

describe('MaestroserviceService', () => {
  let service: MaestroserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestroserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
