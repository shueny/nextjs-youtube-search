import React from 'react'
import { IVideoListProps } from './types'
import { ExternalLink } from '../external-link'
import VideoCard from '../video-card'
import { IVideoCardProps } from '../video-card/types'

const VideoList = ({ results }: IVideoListProps): JSX.Element | null => {
  if (!results) return null
  const { items } = results
  console.log(results)
  return (
    <div className="w-11/12 grid grid-flow-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-10 mx-auto">
      {(items || []).map((item: IVideoCardProps, i: number) => {
        return <VideoCard key={`${i}-${item.id}`} {...item} />
      })}
    </div>
  )
}
export default VideoList
