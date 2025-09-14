import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MarketState } from '../store/market.state';
import { getTokens } from '../store/market.actions';
import { selectMarketTokens } from '../store/market.selectors';

@Component({
  selector: 'ss-market',
  imports: [],
  templateUrl: './market.html',
  styleUrl: './market.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MarketComponent implements OnInit {
  private store = inject(Store<MarketState>);

  protected tokens$ = this.store.select(selectMarketTokens);

  ngOnInit() {
    this.store.dispatch(getTokens());
  }
}
