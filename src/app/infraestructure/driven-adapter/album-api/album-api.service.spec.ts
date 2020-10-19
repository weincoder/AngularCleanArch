import { TestBed } from '@angular/core/testing';

import { AlbumApiService } from './album-api.service';

describe('AlbumApiService', () => {
  let service: AlbumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
