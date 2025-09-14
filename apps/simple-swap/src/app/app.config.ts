import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  providePlatformInitializer,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideUiIcons } from 'ui';
import { provideStore } from '@ngrx/store';
import { marketFeatureKey } from './features/market/store/market.actions';
import { marketReducer } from './features/market/store/market.reducer';
import { debugReducer } from './core/store/debug.reducer';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideZonelessChangeDetection(),
    provideUiIcons(),
    provideStore(
      { [marketFeatureKey]: marketReducer },
      { metaReducers: [debugReducer] }
    ),
    provideEffects(),
  ],
};
