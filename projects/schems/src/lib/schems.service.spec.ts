import { TestBed } from '@angular/core/testing';

import { SchemsService } from './schems.service';

describe('SchemsService', () => {
  let service: SchemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
