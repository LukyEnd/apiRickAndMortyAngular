import { TestBed } from '@angular/core/testing';

import { ServicePageInfoService } from '../service-page-info.service';

describe('ServicePageInfoService', () => {
  let service: ServicePageInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
