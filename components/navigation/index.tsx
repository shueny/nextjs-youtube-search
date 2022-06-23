import React from 'react'
import { INavigationProps } from './types'
import Search from '../search'
import { ExternalLink } from '../external-link'
import { YoutubeIcon } from '../icons'

export default function Navigation({ onChange }: INavigationProps) {
  return (
    <div className="w-11/12 mx-auto pt-10 pb-6 z-[1] border-b border-b-gray-80">
      <div className="flex flex-wrap md:flex-nowrap items-center flex-row justify-center gap-5">
        <div className="w-1/4 md:w-[130px]">
          <ExternalLink href="https://www.youtube.com/">
            <YoutubeIcon color="white" />
          </ExternalLink>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex basis-4/5 xl:basis-3/6">
            <Search onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
