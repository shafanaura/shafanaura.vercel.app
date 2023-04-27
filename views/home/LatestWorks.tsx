import { Box, Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import Space from 'components/Space'
import ProjectCard from 'components/card/ProjectCard'
import { ALOY_IMG, LEVELUP_IMG, RPIO_IMG } from 'constant/img'

const LIST = [
  {
    img: RPIO_IMG,
    href: 'https://residencyprograms.io/',
    title: 'Residency Programs',
    description:
      'Residency programs are advanced training programs that are pursued by medical graduates and doctors who want to specialize in a particular field.',
    tech: [
      'React JS',
      'Next.js',
      'Typescript',
      'Mapbox',
      'React Table',
      'React Query',
      'Chakra UI',
      'Tailwind CSS',
      'Stripe',
    ],
  },
  {
    img: ALOY_IMG,
    href: 'https://beraterin.aloy.sa/',
    title: 'Aloy Beraterin',
    description:
      'Developing a pre-engineering management web app using agile methodologies to improve efficiency and streamline project management.',
    tech: [
      'React JS',
      'Typescript',
      'Mapbox',
      'React Table',
      'React Query',
      'Chakra UI',
    ],
  },
  {
    // img: ALOY_IMG,
    // href: '#',
    title: 'Backwater Trip',
    description:
      'A Backwater Trip in Kerala is a journey on traditional houseboats called kettuvallams to enjoy nature and local culture along the river and coastal areas.',
    tech: [
      'Next.js',
      'Typescript',
      'React Table',
      'React Query',
      'Chakra UI',
      'Tailwind CSS',
    ],
  },
  {
    img: LEVELUP_IMG,
    href: 'http://levelup.amoeba.id/',
    title: 'Level Up',
    description:
      'Level Up by Digital Amoeba is a platform that provides opportunities for sharing knowledge and practical skills in the professional world to Indonesian youth in leading companies.',
    tech: ['Next.js', 'React Table', 'React Query', 'Material UI'],
  },
]

const TOTAL = [
  {
    title: '10+',
    description: 'Real world project',
  },
  {
    title: '5+',
    description: 'Clients Worldwide',
  },
]

const WrapTotal = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <Box lineHeight={1.3}>
      <Text fontWeight="extrabold" fontSize="3xl">
        {title}
      </Text>
      <Text opacity={0.9} fontSize="sm" fontWeight="medium">
        {description}
      </Text>
    </Box>
  )
}

const RecentWork = () => {
  return (
    <section id="works">
      <Space mt="-280px" pb="42px">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <SimpleGrid columns={{ base: 1, md: 5 }} gap="24px">
            <GridItem colSpan={3}>
              <Flex alignItems="center" gap="12px">
                <Box h="3px" w={{ base: '30px', md: '60px' }} bg="black" />
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: '3xl', md: '4xl' }}
                >
                  My{' '}
                  <Text color="brand.500" as="span">
                    latest works
                  </Text>
                </Text>
              </Flex>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                opacity={0.9}
                w={{ md: '78%' }}
              >
                Here are some websites that I have worked on. I am not
                displaying some of them because they are confidential
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex justifyContent={{ base: 'center', md: 'end' }} gap="42px">
                {TOTAL.map((item, idx) => (
                  <WrapTotal
                    key={idx}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacingY="42px"
          mt="24px"
          gap="24px"
        >
          {LIST.map((item, idx) => (
            <ProjectCard
              tagMinHeight="110px"
              key={idx}
              description={item.description}
              href={item.href}
              img={item.img}
              tech={item.tech}
              title={item.title}
            />
          ))}
        </SimpleGrid>
      </Space>
    </section>
  )
}

export default RecentWork
