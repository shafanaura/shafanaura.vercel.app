import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = BoxProps & {
  children: ReactNode
  isActive?: boolean
}

const UnderlineLink = ({ children, isActive, ...rest }: Props) => {
  return (
    <Box
      {...rest}
      fontWeight="medium"
      color={isActive ? 'brand.500' : 'grayBrand.500'}
      _hover={{ color: 'brand.500', textDecoration: 'underline' }}
    >
      {children}
    </Box>
  )
}

export default UnderlineLink
