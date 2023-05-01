import { Box, Button, Flex, Link, Text, VStack } from '@chakra-ui/react'
import Space from 'src/components/Space'
import UnderlineLink from './link/UnderlineLink'

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
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          pt="44px"
          pb="24px"
          gap="24px"
        >
          <Flex gap="12px">
            <UnderlineLink fontSize="sm">
              <Link
                target="_blank"
                href="https://github.com/shafanaura/shafanaura.vercel.app"
              >
                Source Code
              </Link>
            </UnderlineLink>
          </Flex>
          <Text fontSize="sm">© Shafa Naura P.A 2023 </Text>
        </Flex>
      </Space>
    </Box>
  )
}

export default Footer
