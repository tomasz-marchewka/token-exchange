import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  filter,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CurrencyExchangeService } from '../../../shared/services/currency-exchange/currency-exchange-service';
import { TokensService } from '../../../shared/services/tokens/tokens.service';
import {
  getTokens,
  getTokensFailed,
  getTokensSuccess,
  sellTokens,
  setBuyAmount,
  setBuyToken,
  setSellAmount,
  setSellToken,
  setTokenRate,
  setUsdTokenRate,
} from './market.actions';
import {
  selectBuyToken,
  selectMarket,
  selectSellAmount,
  selectSellToken,
  selectTokenRate,
} from './market.selectors';
import { MatDialog } from '@angular/material/dialog';
import { TransactionFinishedDialog } from '../../../shared/components/transactin-finished-dialog/transaction-finished-dialog';
import { TransactionFinishedDialogData } from '../../../shared/types/transaction-finished-dialog.types';

@Injectable()
export class MarketEffects {
  private actions$ = inject(Actions);
  private tokensService = inject(TokensService);
  private exchangeService = inject(CurrencyExchangeService);
  private store = inject(Store);
  private dialog = inject(MatDialog);

  getTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTokens),
      switchMap(() =>
        this.tokensService.fetchTokens().pipe(
          map((tokens) => getTokensSuccess({ tokens })),
          catchError(() =>
            of(getTokensFailed({ error: new Error('Get tokens error') }))
          )
        )
      )
    )
  );

  setTokenRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setSellToken, setBuyToken),
      withLatestFrom(
        this.store.select(selectSellToken),
        this.store.select(selectBuyToken)
      ),
      filter(([, sellToken, buyToken]) => !!sellToken && !!buyToken),
      switchMap(([, sellToken, buyToken]) =>
        this.exchangeService
          .getTokenRate(sellToken!.id, buyToken!.id)
          .pipe(map((rate) => setTokenRate({ rate })))
      )
    )
  );

  setUsdTokenRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setSellToken),
      switchMap(({ token }) =>
        this.exchangeService
          .getUsdTokenRate(token.id)
          .pipe(map((rate) => setUsdTokenRate({ rate })))
      )
    )
  );

  setByAmount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setSellAmount, setTokenRate),
      withLatestFrom(
        this.store.select(selectSellAmount),
        this.store.select(selectTokenRate)
      ),
      filter(([, , rate]) => !!rate),
      map(([, amount, rate]) =>
        this.exchangeService.exchangeCurrency(amount, rate || 1)
      ),
      map((buyAmount) => setBuyAmount({ amount: buyAmount }))
    )
  );

  sellTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sellTokens),
      withLatestFrom(this.store.select(selectMarket)),
      tap(([, { buyAmount, sellAmount, buyToken, sellToken, usdTokenRate }]) =>
        this.dialog.open(TransactionFinishedDialog, {
          data: {
            buyAmount,
            sellAmount,
            buyToken: buyToken?.name || '',
            sellToken: sellToken?.name || '',
            usdRate: usdTokenRate || 1,
          } satisfies TransactionFinishedDialogData,
        })
      ),
      map(() => setSellAmount({ amount: 0 }))
    )
  );
}
