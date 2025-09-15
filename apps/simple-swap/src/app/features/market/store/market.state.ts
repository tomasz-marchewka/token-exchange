import { Token } from '../../../shared/types/tokens.types';

export type MarketState = {
  tokens: Token[];
  sellToken?: Token;
  buyToken?: Token;
  tokenRate?: number;
  usdTokenRate?: number;
  sellAmount: number;
  buyAmount: number;
};

export const marketInitialState: MarketState = {
  tokens: [],
  sellAmount: 0,
  buyAmount: 0,
};
