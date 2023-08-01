import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { ContentType } from 'src/types/frontmatters'

export async function getFiles(type: ContentType) {
  const dirPath = join(process.cwd(), 'src', 'contents', type)
  return readdirSync(dirPath)
}

export async function getFileBySlug(type: ContentType, slug: string) {
  const filePath = join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`)
  return readFileSync(filePath, 'utf8')
}
