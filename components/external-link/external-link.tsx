import Link from 'next/link'

interface ExternalLinkProps {
  href: string
  underline?: boolean
  children: JSX.Element | string
  className?: string
}

const ExternalLink = ({
  href,
  underline = false,
  className,
  children,
}: ExternalLinkProps) => {
  const linkStyle = `active:text-red-primary duration-200 ease-in hover:text-red-primary
	${underline && 'underline'} ${className ?? ''}`

  return (
    <Link href={href} passHref>
      <a target="_blank" rel="noreferrer noopener" className={linkStyle}>
        {children}
      </a>
    </Link>
  )
}

export default ExternalLink
