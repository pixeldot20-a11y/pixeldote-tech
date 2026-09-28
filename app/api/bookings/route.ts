import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const appointment = await prisma.appointment.create({
      data: {
        clientName: body.clientName,
        phone: body.phone,
        email: body.email || null,
        serviceName: body.serviceName,
        date: body.date,
        timeSlot: body.timeSlot,
      },
    })
    return NextResponse.json({ success: true, appointment })
  } catch (error) {
    console.error('Booking Save Error:', error)
    return NextResponse.json({ success: false, error: 'Failed to save appointment' }, { status: 500 })
  }
}