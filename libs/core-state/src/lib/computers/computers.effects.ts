import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as computersActions from './computers.actions';
import { Computer, ComputerService, NotifyService } from '@mdv-thirteen/core-data';
import { ComputersPartialState } from './computers.reducer';
import { ComputersFacade } from './computers.facade';

@Injectable()
export class ComputersEffects {
  loadComputers$ = createEffect(() =>
    this.dataPersistence.fetch(computersActions.loadComputers, {
      run: (
        action: ReturnType<typeof computersActions.loadComputers>,
        state: ComputersPartialState
      ) => {
        return this.computersService.all().pipe(
          map((computers: Computer[]) => computersActions.computersLoaded({ computers }))
        );
      },
      onError: (action: ReturnType<typeof computersActions.loadComputers>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addComputer$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(computersActions.createComputer, {
      run: (
        action: ReturnType<typeof computersActions.createComputer>,
        state: ComputersPartialState
      ) => {
        return this.computersService.create(action.computer).pipe(
          map((computer: Computer) => computersActions.computerCreated({ computer })),
          tap(() => this.notfiy.notification('Successfully Added a Computer'))
        );
      },
      onError: (action: ReturnType<typeof computersActions.createComputer>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateComputer$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(computersActions.updateComputer, {
      run: (
        action: ReturnType<typeof computersActions.updateComputer>,
        state: ComputersPartialState
      ) => {
        return this.computersService.update(action.computer).pipe(
          map((computer: Computer) => computersActions.computerUpdated({ computer })),
          tap(() => this.notfiy.notification('Successfully Updated a Computer'))
        );
      },
      onError: (action: ReturnType<typeof computersActions.updateComputer>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteComputer$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(computersActions.deleteComputer, {
      run: (
        action: ReturnType<typeof computersActions.deleteComputer>,
        state: ComputersPartialState
      ) => {
        return this.computersService.delete(action.computer).pipe(
          map((computer: Computer) => computersActions.computerDeleted({ computer })),
          tap(() => this.notfiy.notification('Successfully Deleted a Computer')),
          tap(() => this.computersFacade.loadComputers())
        )
      },
      onError: (action: ReturnType<typeof computersActions.deleteComputer>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ComputersPartialState>,
    private computersService: ComputerService,
    private notfiy: NotifyService,
    private computersFacade: ComputersFacade
  ) {}
}
