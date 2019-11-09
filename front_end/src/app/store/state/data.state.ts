import { IVideoData } from 'src/app/models/video-data';


export interface IDataState {
    data: IVideoData;
    interval: number;
    index: number;
}

export const initialDataState: IDataState = {
    data: null,
    interval: 5,
    index: 0
}