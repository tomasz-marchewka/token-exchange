import { createAction, props } from '@ngrx/store';
import { Token } from '../../../shared/types/tokens.types';
import { create } from 'domain';

export const marketFeatureKey = 'Market';

export const getTokens = createAction(`[${marketFeatureKey}] Get tokens`);
export const getTokensSuccess = createAction(
  `$[${marketFeatureKey} Get tokens success]`,
  props<{ tokens: Token[] }>()
);
export const getTokensFailed = createAction(
  `[${marketFeatureKey}] Get tokens failed`,
  props<{ error: Error }>()
);

export const setSellToken = createAction(
  `[${marketFeatureKey}] Set sell token`,
  props<{ token: Token }>()
);

export const setBuyToken = createAction(
  `[${marketFeatureKey}] Set buy token`,
  props<{ token: Token }>()
);

export const setTokenRate = createAction(
  `[${marketFeatureKey}] Set token rate`,
  props<{ rate: number }>()
);

export const setUsdTokenRate = createAction(
  `[${marketFeatureKey}] Set usd token rate`,
  props<{ rate: number }>()
);

export const setSellAmount = createAction(
  `[${marketFeatureKey}] Set sell amount`,
  props<{ amount: number }>()
);

export const setBuyAmount = createAction(
  `[${marketFeatureKey}] Set buy amount`,
  props<{ amount: number }>()
);

export const sellTokens = createAction(`[${marketFeatureKey}] Sell tokens`);

export const swapTokens = createAction(`[${marketFeatureKey}] Swap tokens`);
