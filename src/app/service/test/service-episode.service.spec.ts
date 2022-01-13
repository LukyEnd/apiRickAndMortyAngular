import { TestBed } from '@angular/core/testing';

import { ServiceEpisodeService } from './service-episode.service';

describe('ServiceEpisodeService', () => {
  let service: ServiceEpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEpisodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
