import {IVideoCardProps} from '../video-card/types';

export type IVideoListProps = {
	results: {
		items?: IVideoCardProps[] | null;
		etag?: string | null;
		nextPageToken?: string | null;
		pageInfo?: {
			resultsPerPage: number | null;
			totalResults: number | null;
		};
		regionCode?: string | null;
	} | null;
};
