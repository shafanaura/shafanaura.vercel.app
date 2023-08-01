import {
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  Tooltip,
  theme,
  useClipboard,
} from '@chakra-ui/react'
import { HiOutlineClipboard, HiOutlineClipboardCheck } from 'react-icons/hi'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  children: {
    props: {
      children: string
      className: string
    }
  }
}

const CodeBlock = ({ children }: Props) => {
  const { hasCopied, onCopy, setValue, value } = useClipboard('')

  const language = children.props.className?.includes('language-')
    ? children.props.className?.split('-')[1]
    : ''

  return (
    <Box fontSize="sm" bg="gray.200" rounded="12px">
      <Box px="12px" pt="6px">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">{language}</Text>
          <Tooltip label={hasCopied ? 'Copied' : 'Copy'}>
            <IconButton
              aria-label=""
              rounded="full"
              size="sm"
              bg="gray.400"
              _hover={{ bg: 'gray.500' }}
              fontSize="20px"
              icon={
                <Icon
                  as={hasCopied ? HiOutlineClipboardCheck : HiOutlineClipboard}
                />
              }
              onClick={() => {
                setValue(children.props.children)
                onCopy()
              }}
            />
          </Tooltip>
        </Flex>
      </Box>
      <SyntaxHighlighter
        customStyle={{
          backgroundColor: theme.colors.gray[100],
          borderRadius: '0 0 12px 12px',
        }}
        language={language}
        style={prism}
      >
        {children.props.children}
      </SyntaxHighlighter>
    </Box>
  )
}

export default CodeBlock
