import { createSelector, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDataState } from '../state/data.state';

const selectApp = (state: IAppState) => state.appData;

export const selectData = createSelector(
    selectApp,
    (state: IDataState) => state.data
);

export const selectInterval = createSelector(
    selectApp,
    (state: IDataState) => state.interval
);

export const selectIndex = createSelector(
    selectApp,
    (state: IDataState) => state.index
);

