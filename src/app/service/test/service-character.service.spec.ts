import { TestBed } from '@angular/core/testing';

import { ServiceCharacterService } from '../service-character.service';

describe('ServiceCharacterService', () => {
  let service: ServiceCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
