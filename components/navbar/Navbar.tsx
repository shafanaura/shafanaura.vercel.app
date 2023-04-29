import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import UnderlineLink from 'components/link/UnderlineLink'
import Space from 'components/Space'
import { useRef } from 'react'
import { FiMenu } from 'react-icons/fi'

const LINK = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Work',
    href: '/#work',
  },
  {
    label: 'Project',
    href: '/#project',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

const DesktopContent = () => (
  <Box display={{ base: 'none', md: 'block' }}>
    <Space>
      <Flex justifyContent="space-between" alignItems="center" gap="12px">
        <Text fontSize="2xl" fontWeight="extrabold">
          Shafa{' '}
          <Text as="span" color="brand.500">
            Dev
          </Text>
        </Text>
        <Flex alignItems="center" gap={{ base: '12px', md: '42px' }}>
          {LINK.map((item, idx) => (
            <UnderlineLink key={idx}>
              <Link href={item.href}>{item.label}</Link>
            </UnderlineLink>
          ))}
          <Link href="https://linktr.ee/shafanaura" target="_blank">
            <Button colorScheme="brandBlack">{"Let's"} talk</Button>
          </Link>
        </Flex>
      </Flex>
    </Space>
  </Box>
)

const MobileContent = () => (
  <Stack spacing="18px">
    {LINK.map((item, idx) => (
      <UnderlineLink key={idx}>
        <Link href={item.href}>{item.label}</Link>
      </UnderlineLink>
    ))}
  </Stack>
)

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>()

  return (
    <>
      <Box bg="brown.500" py="10px" position="sticky" zIndex={99} top={0}>
        <DesktopContent />
        <Space display={{ base: 'block', md: 'none' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="2xl" fontWeight="extrabold">
              Shafa{' '}
              <Text as="span" color="brand.500">
                Dev
              </Text>
            </Text>
            <IconButton
              aria-label=""
              variant="link"
              icon={<FiMenu fontSize={24} />}
              onClick={onOpen}
            />
          </Flex>
        </Space>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Reach me out</DrawerHeader>

          <DrawerBody>
            <MobileContent />
          </DrawerBody>
          <DrawerFooter>
            <Box w="full">
              <Link href="https://linktr.ee/shafanaura" target="_blank">
                <Button mt="12px" colorScheme="brandBlack" w="full">
                  {"Let's"} talk
                </Button>
              </Link>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
