import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromComputers from './computers.reducer';
import * as computersActions from './computers.actions';
import {
  selectAllComputers,
  selectComputer,
  selectComputersLoading
} from './computers.selectors';
import { Computer } from '@mdv-thirteen/core-data';

@Injectable({
  providedIn: 'root'
})
export class ComputersFacade {
  allComputers$ = this.store.pipe(select(selectAllComputers));
  selectedComputer$ = this.store.pipe(select(selectComputer));
  computerLoading$ = this.store.pipe(select(selectComputersLoading));

  constructor(private store: Store<fromComputers.ComputersPartialState>) {}

  selectComputer(selectedComputerId: string) {
    this.dispatch(computersActions.computerSelected({ selectedComputerId }));
  }

  loadComputers() {
    this.dispatch(computersActions.loadComputers());
  }

  createComputer(computer: Computer) {
    this.dispatch(computersActions.createComputer({ computer }));
  }

  updateComputer(computer: Computer) {
    this.dispatch(computersActions.updateComputer({ computer }));
  }

  deleteComputer(computer: Computer) {
    this.dispatch(computersActions.deleteComputer({ computer }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
