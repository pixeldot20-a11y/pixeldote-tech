import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.price) {
      return NextResponse.json(
        { success: false, error: 'Name and price are required fields.' },
        { status: 400 }
      )
    }

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
  } catch (error: any) {
    console.error('CRITICAL PRODUCT SAVE ERROR:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' }, 
      { status: 500 }
    )
  }
}