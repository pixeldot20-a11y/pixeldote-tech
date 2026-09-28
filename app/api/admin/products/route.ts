import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description || '',
        imageUrl: body.imageUrl || '',
        price: parseFloat(body.price),
        stock: parseInt(body.stock, 10) || 0,
      },
    })

    return NextResponse.json({ success: true, product })
  } catch (error) {
    console.error('Admin Product Save Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save product in admin route' }, 
      { status: 500 }
    )
  }
}