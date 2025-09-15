import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketState } from './market.state';
import { marketFeatureKey } from './market.actions';

export const selectMarket =
  createFeatureSelector<MarketState>(marketFeatureKey);

export const selectMarketTokens = createSelector(
  selectMarket,
  (state: MarketState) => state.tokens
);

export const selectSellToken = createSelector(
  selectMarket,
  (state: MarketState) => state.sellToken
);

export const selectBuyToken = createSelector(
  selectMarket,
  (state: MarketState) => state.buyToken
);

export const selectTokenRate = createSelector(
  selectMarket,
  (state: MarketState) => state.tokenRate
);

export const selectUsdTokenRate = createSelector(
  selectMarket,
  (state: MarketState) => state.usdTokenRate
);

export const selectSellAmount = createSelector(
  selectMarket,
  (state: MarketState) => state.sellAmount
);

export const selectBuyAmount = createSelector(
  selectMarket,
  (state: MarketState) => state.buyAmount
);
