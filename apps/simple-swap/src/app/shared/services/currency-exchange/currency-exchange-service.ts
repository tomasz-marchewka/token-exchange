import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

const MIN_RANGE = 3770;
const MAX_RANGE = 3790;
const RANGE_DIFF = MAX_RANGE - MIN_RANGE;
const INTERVAL = 1000;

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {
  exchangeCurrency(amount: number, rate: number): number {
    return amount * rate;
  }

  getTokenRate(sellTokenId: number, buyTokenId: number): Observable<number> {
    return interval(INTERVAL).pipe(
      map(() => Math.round(Math.random() * 100) / 100)
    );
  }

  getUsdTokenRate(tokenId: number): Observable<number> {
    return interval(INTERVAL).pipe(
      map(() => {
        const base = Math.random() * RANGE_DIFF;
        return MIN_RANGE + base;
      })
    );
  }
}
