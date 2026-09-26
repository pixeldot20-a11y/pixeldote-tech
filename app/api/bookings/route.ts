import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, phone, email, serviceName, date, timeSlot } = body;

    if (!clientName || !phone || !serviceName || !date || !timeSlot) {
      return NextResponse.json({ error: 'Missing required booking details' }, { status: 400 });
    }

    const newAppointment = await prisma.appointment.create({
      data: {
        clientName,
        phone,
        email,
        serviceName,
        date,
        timeSlot,
      },
    });

    return NextResponse.json({ success: true, appointment: newAppointment });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  }
}