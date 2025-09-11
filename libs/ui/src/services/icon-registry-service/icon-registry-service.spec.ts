import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { vi } from 'vitest';

import { IconRegistryService } from './icon-registry-service';

// Mock for MatIconRegistry
const matIconRegistryMock = {
  addSvgIcon: vi.fn(),
};

// Mock for DomSanitizer
const domSanitizerMock = {
  bypassSecurityTrustResourceUrl: (url: string): SafeResourceUrl => url as any, // Simplified for testing
};

describe('IconRegistryService', () => {
  let service: IconRegistryService;
  let registry: MatIconRegistry;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // Service under test
        IconRegistryService,
        // Mock dependencies
        { provide: MatIconRegistry, useValue: matIconRegistryMock },
        { provide: DomSanitizer, useValue: domSanitizerMock },
      ],
    });
    service = TestBed.inject(IconRegistryService);
    registry = TestBed.inject(MatIconRegistry);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  afterEach(() => {
    // Reset mocks after each test
    vi.mocked(registry.addSvgIcon).mockClear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('registerIcons()', () => {
    it('should register all application icons with correct names and paths', () => {
      // Spy on the sanitizer to verify it's used correctly
      const sanitizerSpy = vi.spyOn(sanitizer, 'bypassSecurityTrustResourceUrl');

      // Execute the method
      service.registerIcons();

      // Verify that addSvgIcon was called for both icons
      expect(registry.addSvgIcon).toHaveBeenCalledTimes(2);

      // Verify the arguments for the 'crypto_icon'
      expect(sanitizerSpy).toHaveBeenCalledWith('assets/icons/crypto_icon.svg');
      expect(registry.addSvgIcon).toHaveBeenCalledWith(
        'crypto_icon',
        domSanitizerMock.bypassSecurityTrustResourceUrl('assets/icons/crypto_icon.svg')
      );

      // Verify the arguments for the 'keyboard_arrow_down' icon
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
