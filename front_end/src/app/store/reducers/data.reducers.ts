import { DActions, EDataActions } from '../actions/data.actions';
import { initialDataState, IDataState } from '../state/data.state';
import { IVideoData } from 'src/app/models/video-data';

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
            const videoKilled: IVideoData = {
                ...state.data,
                [action.interval_index]: action.payload
            }

            return {
                ...state,
                data: videoKilled
            };
        }
        case EDataActions.SetIndex: {
            return {
                ...state,
                index: action.i
            };
        }
        default:
            return state;
    }
}