import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getTokens, getTokensFailed, getTokensSuccess } from './market.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class MarketEffects {
  private actions$ = inject(Actions);

  getTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTokens),
      switchMap(() =>
        of([]).pipe(
          map((tokens) => getTokensSuccess({ tokens })),
          catchError(() =>
            of(getTokensFailed({ error: new Error('Get tokens error') }))
          )
        )
      )
    )
  );
}
