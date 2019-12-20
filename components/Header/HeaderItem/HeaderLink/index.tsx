import React from 'react'
import Link from 'next/link'
import NavLink from 'reactstrap/lib/NavLink'
import style from './style'

export default ({ href, text }: Props) => (
  <span>
    {style}
    <Link href={href}>
      <NavLink className="header-link" data-tid={`nav-${text}`}>
        {text}
      </NavLink>
    </Link>
  </span>
)

interface Props {
  href: string
  text: string
}
