import { TestBed } from '@angular/core/testing';

import { BancoinkService } from './bancoink.service';

describe('BancoinkService', () => {
  let service: BancoinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
