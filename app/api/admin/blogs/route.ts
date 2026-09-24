import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, slug, excerpt, content } = body

    if (!title || !slug || !content) {
      return NextResponse.json({ success: false, error: 'Title, slug, and content are required' }, { status: 400 })
    }

    const blog = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: excerpt || '',
        content
      }
    })

    return NextResponse.json({ success: true, blog })
  } catch (error: any) {
    console.error('Failed to create blog post:', error)
    return NextResponse.json({ success: false, error: error.message || 'Failed to create blog post' }, { status: 500 })
  }
}