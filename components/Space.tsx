import { Box, BoxProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

const Space = ({ children, ...props }: BoxProps & { children: ReactNode }) => {
  return (
    <Box mx="auto" px="18px" maxW={{ lg: '1100px' }} {...props}>
      {children}
    </Box>
  )
}

export default Space
