import { Box } from '@chakra-ui/react'
import Link from 'next/link'

const Blog = () => {
  return (
    <div>
      Blog
      {['test-1', 'test-2'].map((item, idx) => (
        <Link href={`/blog/${item}`} key={idx}>
          <Box bg="blue.100">{item}</Box>
        </Link>
      ))}
    </div>
  )
}

export default Blog
