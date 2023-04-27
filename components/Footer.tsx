import { Box, Button, Divider, Link, Text, VStack } from '@chakra-ui/react'
import Space from 'components/Space'
import React from 'react'

const Footer = () => {
  return (
    <Box bg="yellow.500" pt="62px">
      <Space>
        <VStack textAlign="center">
          <Text fontWeight="extrabold" fontSize="4xl">
            {"Let's"}{' '}
            <Text as="span" color="red.500">
              build
            </Text>{' '}
            something great together
          </Text>

          <Link href="https://linktr.ee/shafanaura" target="_blank">
            <Button size="lg" colorScheme="red" mt="24px">
              {"Let's"} collaborate
            </Button>
          </Link>
        </VStack>
        <Divider h="1px" bg="brandBlack.500" mt="32px" />
        <VStack py="24px">
          <Text fontSize="sm">Copyright ©2023 Shafa Naura P.A</Text>
        </VStack>
      </Space>
    </Box>
  )
}

export default Footer
