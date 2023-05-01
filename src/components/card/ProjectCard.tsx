import { Box, Flex, IconButton, Link, Tag, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

type Props = {
  title?: string
  description?: string
  tech?: string[]
  href?: string
  img?: string
  tagMinHeight?: string
}

const ProjectCard = ({
  title,
  description,
  tech,
  href,
  img,
  tagMinHeight,
}: Props) => {
  return (
    <Box
      mt="42px"
      gap="24px"
      transition="transform .2s ease"
      transform="translateY(0)"
      _hover={{ transform: 'translateY(-2px)' }}
    >
      <Box position="relative" w="full" h="190px" overflow="hidden">
        <Image
          blurDataURL="#"
          placeholder="blur"
          src={img || ''}
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Text fontWeight="extrabold" mt="8px" mb="4px" fontSize="xl">
        {title}
      </Text>
      <Text opacity={0.9} fontSize="sm">
        {description}
      </Text>

      <Flex justifyContent="space-between" alignItems="end">
        <Box minH={tagMinHeight}>
          <Flex flexWrap="wrap" gap="8px" mt="12px">
            {tech?.map((t, tIdx) => (
              <Tag variant="subtle" colorScheme="brand" key={tIdx}>
                {t}
              </Tag>
            ))}
          </Flex>
        </Box>
        {href && (
          <Link href={href} target="_blank">
            <IconButton
              icon={<FiArrowUpRight />}
              rounded="full"
              aria-label=""
              colorScheme="red"
              size="lg"
              fontSize={20}
            />
          </Link>
        )}
      </Flex>
    </Box>
  )
}

export default ProjectCard
