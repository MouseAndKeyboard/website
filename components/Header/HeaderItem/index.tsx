import React from 'react'
import { NavItemProps } from 'reactstrap'
import HeaderDropdown from './HeaderDropdown'
import HeaderLink from './HeaderLink'
import NavItem from 'reactstrap/lib/NavItem'

export default function({ item, ...props }: Props) {
  const { href, text, items } = item
  return (
    <NavItem {...props}>
      {items ? (
        <HeaderDropdown items={items} href={href} text={text} />
      ) : (
        <HeaderLink href={href} text={text} />
      )}
    </NavItem>
  )
}

interface Props extends NavItemProps {
  item: HeaderItemContent
}

export interface HeaderItemContent {
  href: string
  text: string
  items?: HeaderItemContent[]
}
