import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customerName, phone, totalAmount } = body

    if (!customerName || !phone || !totalAmount) {
      return NextResponse.json({ success: false, error: 'Missing required order fields' }, { status: 400 })
    }

    const order = await prisma.order.create({
      data: {
        customerName,
        phone,
        totalAmount,
        status: 'PENDING'
      }
    })

    return NextResponse.json({ success: true, order })
  } catch (error) {
    console.error('Failed to create order:', error)
    return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 })
  }
}