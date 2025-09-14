import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketState } from './market.state';
import { marketFeatureKey } from './market.actions';

export const selectMarket =
  createFeatureSelector<MarketState>(marketFeatureKey);

export const selectMarketTokens = createSelector(
  selectMarket,
  (state: MarketState) => state.tokens
);
