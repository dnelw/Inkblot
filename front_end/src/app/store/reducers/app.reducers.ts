import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { dataReducers } from './data.reducers';

export const appReducers: ActionReducerMap<IAppState, any> ={
    appData: dataReducers
};