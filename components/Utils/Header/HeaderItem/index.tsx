import React from 'react'
import { NavItemProps } from 'reactstrap'
import HeaderDropdown from './HeaderDropdown'
import HeaderLink from './HeaderLink'
import NavItem from 'reactstrap/lib/NavItem'

const HeaderItem = ({ item: { href, text, items }, ...props }: Props) => (
  <NavItem {...props}>
    {items ? (
      <HeaderDropdown items={items} href={href} text={text} />
    ) : (
      <HeaderLink href={href} text={text} />
    )}
  </NavItem>
)

interface Props extends NavItemProps {
  item: HeaderItemContent
}

export interface HeaderItemContent {
  href: string
  text: string
  items?: HeaderItemContent[]
}

export default HeaderItem
