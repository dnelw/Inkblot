import { Action } from '@ngrx/store';
import { IVideoData } from 'src/app/models/video-data';

export enum EDataActions {
    SetInterval = '[Data] Setting Interval',
    AddVideoFrame = '[Data] Adding Video Frame Data'
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

export type DActions = 
    | SetInterval 
    | AddVideoFrame;