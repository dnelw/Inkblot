import { Action } from '@ngrx/store';
import { IVideoData } from 'src/app/models/video-data';

export enum EDataActions {
    SetInterval = '[Data] Setting Interval',
    AddVideoFrame = '[Data] Adding Video Frame Data',
    SetIndex = '[Data] Setting Index'
}

export class SetInterval implements Action {
    public readonly type = EDataActions.SetInterval;
    constructor(public interval: number) {}
}

export class AddVideoFrame implements Action {
    public readonly type = EDataActions.AddVideoFrame;
    constructor(
        public interval_index: number,
        public payload: IVideoData
    ) {}
}

export class SetIndex implements Action {
    public readonly type = EDataActions.SetIndex;
    constructor(
        public i: number
    ) {}
}

export type DActions = 
    | SetInterval 
    | AddVideoFrame
    | SetIndex;