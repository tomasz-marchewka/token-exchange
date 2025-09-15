import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TexButtonComponent } from 'ui';
import { ExchangeInputsComponent } from '../../../shared/components/exchange-inputs/exchange-inputs';
import { ExchangeRateInfo } from '../../../shared/components/exchange-rate-info/exchange-rate-info';
import {
  getTokens,
  sellTokens,
  setBuyToken,
  setSellAmount,
  setSellToken,
  swapTokens,
} from '../store/market.actions';
import {
  selectBuyAmount,
  selectBuyToken,
  selectMarketTokens,
  selectSellAmount,
  selectSellToken,
  selectTokenRate,
  selectUsdTokenRate,
} from '../store/market.selectors';
import { MarketState } from '../store/market.state';
import { AsyncPipe } from '@angular/common';
import { Token } from '../../../shared/types/tokens.types';

@Component({
  selector: 'ss-market',
  imports: [
    TexButtonComponent,
    ExchangeInputsComponent,
    ExchangeRateInfo,
    ExchangeInputsComponent,
    AsyncPipe,
  ],
  templateUrl: './market.html',
  styleUrl: './market.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MarketComponent implements OnInit {
  private store = inject(Store<MarketState>);

  protected tokens$ = this.store.select(selectMarketTokens);
  protected sellToken$ = this.store.select(selectSellToken);
  protected buyToken$ = this.store.select(selectBuyToken);
  protected usdTokenRate$ = this.store.select(selectUsdTokenRate);
  protected tokenRate$ = this.store.select(selectTokenRate);
  protected sellAmount$ = this.store.select(selectSellAmount);
  protected buyAmount$ = this.store.select(selectBuyAmount);

  ngOnInit() {
    this.store.dispatch(getTokens());
  }

  sellTokenChange(token: Token) {
    this.store.dispatch(setSellToken({ token }));
  }

  buyTokenChange(token: Token) {
    this.store.dispatch(setBuyToken({ token }));
  }

  sellAmountChange(amount: number) {
    this.store.dispatch(setSellAmount({ amount }));
  }

  sell() {
    this.store.dispatch(sellTokens());
  }

  swapTokensChange() {
    this.store.dispatch(swapTokens());
  }
}
