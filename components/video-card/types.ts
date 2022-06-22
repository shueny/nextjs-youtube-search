export interface IVideoCardProps {
	etag: string;
	id: {kind: string; videoId: string};
	kind: string;
	snippet: {
		channelId: string;
		channelTitle: string;
		description: string;
		liveBroadcastContent: string;
		publishTime: string;
		publishedAt: string;
		thumbnails: {
			default: ThumbnailsType;
			medium: ThumbnailsType;
			high: ThumbnailsType;
		};
		title: string;
	};
}

type ThumbnailsType = {
	height: number;
	url: string;
	width: number;
};
