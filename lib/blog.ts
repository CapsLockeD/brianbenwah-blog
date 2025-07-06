import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tags: string[]
  published: boolean
  content?: string
  slug: string
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
      const slug = id

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        slug,
        ...(matterResult.data as Omit<BlogPost, 'id' | 'slug'>),
      }
    })
    .filter(post => post.published) // Only return published posts
    .sort((a, b) => (a.date < b.date ? 1 : -1)) // Sort by date descending

  return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
      slug,
      content: contentHtml,
      ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
    }
  } catch (error) {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category)))
  return categories
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)))
  return tags
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return format(date, 'MMMM d, yyyy')
} 