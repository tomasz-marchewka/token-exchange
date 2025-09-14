import { createAction, props } from '@ngrx/store';
import { Token } from '../../../shared/types/tokens.types';

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
