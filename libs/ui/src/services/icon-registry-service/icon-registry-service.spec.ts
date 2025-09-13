import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { vi } from 'vitest';

import { IconRegistryService } from './icon-registry-service';
import { IconsList } from '../../constants/icons.constants';

const matIconRegistryMock = {
  addSvgIcon: vi.fn(),
};

const domSanitizerMock = {
  bypassSecurityTrustResourceUrl: (url: string): SafeResourceUrl => url,
};

describe('IconRegistryService', () => {
  let service: IconRegistryService;
  let registry: MatIconRegistry;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IconRegistryService,
        { provide: MatIconRegistry, useValue: matIconRegistryMock },
        { provide: DomSanitizer, useValue: domSanitizerMock },
      ],
    });
    service = TestBed.inject(IconRegistryService);
    registry = TestBed.inject(MatIconRegistry);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  afterEach(() => {
    vi.mocked(registry.addSvgIcon).mockClear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('registerIcons()', () => {
    it('should register all application icons with correct names and paths', () => {
      const sanitizerSpy = vi.spyOn(
        sanitizer,
        'bypassSecurityTrustResourceUrl'
      );

      service.registerIcons();

      expect(registry.addSvgIcon).toHaveBeenCalledTimes(IconsList.length);

      expect(sanitizerSpy).toHaveBeenCalledWith('assets/icons/crypto_icon.svg');
      expect(registry.addSvgIcon).toHaveBeenCalledWith(
        'crypto_icon',
        domSanitizerMock.bypassSecurityTrustResourceUrl(
          'assets/icons/crypto_icon.svg'
        )
      );

      expect(sanitizerSpy).toHaveBeenCalledWith(
        'assets/icons/keyboard_arrow_down.svg'
      );
      expect(registry.addSvgIcon).toHaveBeenCalledWith(
        'keyboard_arrow_down',
        domSanitizerMock.bypassSecurityTrustResourceUrl(
          'assets/icons/keyboard_arrow_down.svg'
        )
      );
    });
  });
});
