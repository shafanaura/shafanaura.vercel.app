import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {
  meta?: any
}

const BlogTitle = ({ meta }: Props) => {
  console.log(meta)
  return <Button>{meta?.author}</Button>
}

export default BlogTitle
