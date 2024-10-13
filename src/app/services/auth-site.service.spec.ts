import { TestBed } from '@angular/core/testing';

import { AuthSiteService } from './auth-site.service';

describe('AuthSiteService', () => {
  let service: AuthSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
