import { DActions, EDataActions } from '../actions/data.actions';
import { initialDataState, IDataState } from '../state/data.state';

export const dataReducers = (
    state = initialDataState,
    action: DActions
): IDataState => {
    switch (action.type) {
        case EDataActions.SetInterval: {
            return {
                ...state,
                interval: action.interval
            };
        }
        case EDataActions.AddVideoFrame: {
            return {
                ...state,
                [action.interval_index]: action.payload
            };
        }
        default:
            return state;
    }
}