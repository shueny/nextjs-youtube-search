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
    <div
      className="w-full flex flex-wrap content-start transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-disabled/[0.05] hover:shadow-lgssh-keygen -t rsa-b 4096 -C duration-300 p-4 rounded-md"
      id="content-video"
    >
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
