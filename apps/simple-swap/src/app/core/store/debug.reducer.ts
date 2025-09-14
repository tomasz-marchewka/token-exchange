import { ActionReducer } from '@ngrx/store';
import { AppState } from './app.state';

export function debugReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state, action) {
    console.log('action', action);
    console.log('state', state);

    return reducer(state, action);
  };
}
