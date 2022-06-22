import React from 'react'
import { IVideoCardProps } from './types'
import { ExternalLink } from '../external-link'

const VideoCard = ({
  snippet: {
    channelId,
    channelTitle,
    description,
    liveBroadcastContent,
    publishTime,
    publishedAt,
    title,
    thumbnails,
  },
}: IVideoCardProps) => {
  const { medium } = thumbnails
  return (
    <div className="w-full flex flex-wrap content-start" id="content-video">
      <div className="w-full">
        <ExternalLink href="" className="flex object-center">
          <img
            className="w-full object-contain"
            src={medium.url}
            alt={`${channelId}-${title}-${description}`}
          />
        </ExternalLink>
      </div>
      <div className="w-full mt-3">
        <ExternalLink href="" className="avatar-link">
          <>
            <div id="avatar">
              <img src="" alt="" />
            </div>
            <div id="meta-description">
              <h3 className="font-base text-white-primary mb-3">{title}</h3>
              <h5 className="text-xs text-white-secondary">{description}</h5>
              <h6 className="text-xs text-white-secondary">{channelTitle}</h6>
            </div>
          </>
        </ExternalLink>
      </div>
    </div>
  )
}
export default VideoCard
