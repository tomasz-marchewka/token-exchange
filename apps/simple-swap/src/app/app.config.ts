import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideUiIcons } from 'ui';
import { appRoutes } from './app.routes';
import { debugReducer } from './core/store/debug.reducer';
import { marketFeatureKey } from './features/market/store/market.actions';
import { marketReducer } from './features/market/store/market.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideZonelessChangeDetection(),
    provideUiIcons(),
    provideStore(
      { [marketFeatureKey]: marketReducer },
      { metaReducers: [debugReducer] }
    ),
    provideEffects(),
  ],
};
