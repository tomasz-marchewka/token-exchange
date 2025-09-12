import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'market' },
  {
    path: 'market',
    loadComponent: () => import('./features/market/market'),
    data: { preload: false },
  },
  {
    path: 'limit',
    loadComponent: () => import('./features/limit/limit'),
    data: { preload: false },
  },
];
