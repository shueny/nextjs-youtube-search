import Image from 'next/image'
import { ExternalLink } from '../../external-link'
import { IFooterProps } from './types'

export default function FooterLayout({}: IFooterProps) {
  return (
    <footer className="w-full h-10 flex justify-center">
      <ExternalLink
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="w-full flex justify-center items-center"
      >
        <>
          <small>
            <span className="mr-2">&copy; Copyright 2022, Shueny Wang</span>
            <span className="">
              {' '}
              Powered by{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </small>
        </>
      </ExternalLink>
    </footer>
  )
}
