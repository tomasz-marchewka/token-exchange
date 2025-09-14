import { Token } from '../../../shared/types/tokens.types';

export type MarketState = {
  tokens: Token[];
};

export const marketInitialState: MarketState = {
  tokens: [],
};
