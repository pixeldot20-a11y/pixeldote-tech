import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        imageUrl: body.imageUrl,
        price: parseFloat(body.price),
        stock: parseInt(body.stock, 10),
      },
    })
    return NextResponse.json({ success: true, product })
  } catch (error) {
    console.error('Product Save Error:', error)
    return NextResponse.json({ success: false, error: 'Failed to save product' }, { status: 500 })
  }
}