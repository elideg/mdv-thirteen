import { ActionReducerMap } from '@ngrx/store';

import * as fromComputers from './computers/computers.reducer';

export interface AppState {
  computers: fromComputers.ComputersState;
}

export const reducers: ActionReducerMap<AppState> = {
  computers: fromComputers.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
