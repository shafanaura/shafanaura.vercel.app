import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import mdxComponents from 'src/components/mdx/mdxComponents'
import { getFileBySlug, getFiles } from 'src/lib/mdx'

const BlogDetail = ({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      BlogDetail
      <MDXRemote components={mdxComponents as any} {...source} />
    </div>
  )
}

export async function getStaticPaths() {
  const files = await getFiles('blog')
  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const slug = ctx.params?.slug as string

  const source = await getFileBySlug('blog', slug)

  const mdxSource = await serialize(source, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource,
    },
  }
}

export default BlogDetail
