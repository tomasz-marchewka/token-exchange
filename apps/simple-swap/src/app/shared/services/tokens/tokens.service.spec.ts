import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TokensService } from './tokens.service';
import { provideHttpClient } from '@angular/common/http';

describe('TokensService', () => {
  let service: TokensService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TokensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
