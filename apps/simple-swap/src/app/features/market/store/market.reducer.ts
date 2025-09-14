import { createReducer, on } from '@ngrx/store';
import { getTokens, getTokensFailed, getTokensSuccess } from './market.actions';
import { marketInitialState } from './market.state';

export const marketReducer = createReducer(
  marketInitialState,
  on(getTokens, (state) => ({ ...state, tokens: [] })),
  on(getTokensSuccess, (state, { tokens }) => ({ ...state, tokens })),
  on(getTokensFailed, (state) => ({ ...state, tokens: [] }))
);
