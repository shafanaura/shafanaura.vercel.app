import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string
  children: ReactNode
  isActive?: boolean
}) => {
  return (
    <Box
      fontWeight="medium"
      color={isActive ? 'brand.500' : 'grayBrand.500'}
      _hover={{ color: 'brand.500', textDecoration: 'underline' }}
    >
      <Link href={href}>{children}</Link>
    </Box>
  )
}

export default NavLink
