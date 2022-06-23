import {Dispatch, SetStateAction} from 'react';
import {IVideoListProps} from '../../../components/video-list/types';

export type appContextType = IVideoListProps & {
	loading: boolean;
	updateResults: (apiResults: IVideoListProps) => void;
	setLoading: Dispatch<SetStateAction<boolean>>;
};

export const appContextDefaultValues: appContextType = {
	loading: false,
	results: {},
	updateResults: (apiResults: IVideoListProps) => {},
	setLoading: () => false,
};
