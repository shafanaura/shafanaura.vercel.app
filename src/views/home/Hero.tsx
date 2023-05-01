import { Avatar, Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import Space from 'src/components/Space'
import { ME_IMG } from 'src/variables/img'

const Hero = () => {
  return (
    <Box bg="brown.500" pb="380px" pt="42px">
      <Space>
        <Text
          lineHeight={1.1}
          fontWeight="extrabold"
          fontSize={{ base: '5xl', md: '6xl' }}
          color="brandBlack.500"
          mb="12px"
        >
          I create stunningly precise interfaces with creativity
        </Text>
        <Text fontWeight="medium" w={{ md: '60%' }} opacity={0.9}>
          {"I'm"} a Front-End Web Developer who specialize in crafting flawless,
          user-friendly websites that exceed expectations. With an eye for
          detail and a passion for excellence, I bring design concepts to life.
          Currently, I take on project-based work through{' '}
          <Link
            target="_blank"
            href="https://www.upwork.com/freelancers/~01055851b3296d5c11"
            color="brand.500"
            textDecor="underline"
            fontWeight="bold"
          >
            Upwork
          </Link>
        </Text>
        <Link href="https://linktr.ee/shafanaura" target="_blank">
          <Button size="lg" colorScheme="brand" mt="24px">
            Get In Touch
          </Button>
        </Link>
        <Flex alignItems="center" gap="12px" mt="40px">
          <Avatar size="lg" src={ME_IMG} />
          <Text fontWeight="semibold" opacity={0.9}>
            Hi everyone, {"it's me"}, Shafa
          </Text>
        </Flex>
      </Space>
    </Box>
  )
}

export default Hero
