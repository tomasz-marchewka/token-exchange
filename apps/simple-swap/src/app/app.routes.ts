import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { marketFeatureKey } from './features/market/store/market.actions';
import { marketReducer } from './features/market/store/market.reducer';
import { provideEffects } from '@ngrx/effects';
import { MarketEffects } from './features/market/store/market.effects';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'market' },
  {
    path: 'market',
    loadComponent: () => import('./features/market/containers/market'),
    data: { preload: false },
    providers: [
      provideState({ name: marketFeatureKey, reducer: marketReducer }),
      provideEffects(MarketEffects),
    ],
  },
  {
    path: 'limit',
    loadComponent: () => import('./features/limit/limit'),
    data: { preload: false },
  },
];
