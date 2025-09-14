import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {
  exchangeCurrency(amount: number, rate: number) {
    return amount * rate;
  }
}
