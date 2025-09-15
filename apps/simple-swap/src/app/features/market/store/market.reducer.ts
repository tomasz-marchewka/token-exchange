import { createReducer, on } from '@ngrx/store';
import {
  getTokens,
  getTokensFailed,
  getTokensSuccess,
  setBuyAmount,
  setBuyToken,
  setSellAmount,
  setSellToken,
  setTokenRate,
  setUsdTokenRate,
  swapTokens,
} from './market.actions';
import { marketInitialState } from './market.state';

export const marketReducer = createReducer(
  marketInitialState,
  on(getTokens, (state) => ({ ...state, tokens: [] })),
  on(getTokensSuccess, (state, { tokens }) => ({ ...state, tokens })),
  on(getTokensFailed, (state) => ({ ...state, tokens: [] })),
  on(setSellToken, (state, { token }) => ({ ...state, sellToken: token })),
  on(setBuyToken, (state, { token }) => ({ ...state, buyToken: token })),
  on(setTokenRate, (state, { rate }) => ({
    ...state,
    tokenRate: rate,
  })),
  on(setUsdTokenRate, (state, { rate }) => ({
    ...state,
    usdTokenRate: rate,
  })),
  on(setSellAmount, (state, { amount }) => ({ ...state, sellAmount: amount })),
  on(setBuyAmount, (state, { amount }) => ({ ...state, buyAmount: amount })),
  on(swapTokens, (state) => ({
    ...state,
    sellToken: state.buyToken,
    buyToken: state.sellToken,
    sellAmount: state.buyAmount,
    buyAmount: state.sellAmount,
  }))
);
