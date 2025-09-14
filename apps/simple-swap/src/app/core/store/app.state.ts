import { marketFeatureKey } from '../../features/market/store/market.actions';
import { MarketState } from '../../features/market/store/market.state';

export type AppState = {
  [marketFeatureKey]: MarketState;
};
