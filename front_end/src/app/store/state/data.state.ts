import { IVideoData } from 'src/app/models/video-data';


export interface IDataState {
    data: IVideoData;
    interval: number;
}

export const initialDataState: IDataState = {
    data: null,
    interval: null
}