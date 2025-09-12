import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  APP_INITIALIZER,
  EnvironmentProviders,
  inject,
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsList } from '../../constants/icons.constants';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  registerIcons(): void {
    IconsList.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${icon}.svg`
        )
      );
    });
  }
}

export function provideUiIcons(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: (iconRegistry: IconRegistryService) => () =>
        iconRegistry.registerIcons(),
      deps: [IconRegistryService, MatIconRegistry, DomSanitizer],
      multi: true,
    },
  ]);
}
