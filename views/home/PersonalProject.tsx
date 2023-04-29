import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Space from 'components/Space'
import ProjectCard from 'components/card/ProjectCard'
import { SAAS_IMG } from 'constant/img'

const LIST = [
  {
    img: SAAS_IMG,
    href: 'https://saas-crypto-portfolio.vercel.app/',
    title: 'SaaS Crypto Portfolio',
    description: 'Landing Page for crypto portfolio',
    tech: ['Next.js', 'Typescript', 'Chakra UI'],
  },
]

const PersonalProject = () => {
  return (
    <Space py="42px" id="project">
      <VStack textAlign="center" spacing={0}>
        <Text
          w={{ md: '50%' }}
          lineHeight={1.1}
          fontWeight="extrabold"
          fontSize={{ base: '3xl', md: '4xl' }}
        >
          {"Let's"} have a look at my{' '}
          <Text as="span" color="brand.500">
            personal projects
          </Text>
        </Text>
        <Text
          opacity={0.9}
          pt="12px"
          fontSize={{ base: 'sm', md: 'md' }}
          w={{ md: '50%' }}
        >
          These are my personal projects, which I am excited to showcase as they
          represent my passion and proficiency in various fields
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} mt="42px">
        {LIST.map((item, idx) => (
          <ProjectCard
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
  )
}

export default PersonalProject
