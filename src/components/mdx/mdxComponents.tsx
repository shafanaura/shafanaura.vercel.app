import {
  Box,
  Code,
  Heading,
  HeadingProps,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import CodeBlock from 'src/components/mdx/CodeBlock'

const mdxComponents = {
  img: Image,
  h1: Heading,
  h2: (props: HeadingProps) => <Heading as="h2" size="lg" {...props} />,
  p: Text,
  code: (props: any) => <Code colorScheme="brand" {...props} />,
  pre: CodeBlock,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  a: (props: any) => <Link color="brand.500" {...props} />,
  blockquote: (props: any) => (
    <Box
      borderLeftWidth="0.25rem"
      borderLeftColor="green.300"
      pl={4}
      py={2}
      my={4}
      {...props}
    >
      <Text as="i">{props.children}</Text>
    </Box>
  ),
}

export default mdxComponents
