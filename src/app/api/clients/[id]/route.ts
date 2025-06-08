import { NextRequest, NextResponse } from 'next/server';
import { clients } from '@/db/schema';
import { z } from 'zod';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';

const clientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  category: z.string().min(1, 'Category is required'),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Invalid email').optional()
});

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const clientId = Number(id);

  if (isNaN(clientId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const data = clientSchema.parse(body);

    const updated = await db
      .update(clients)
      .set(data)
      .where(eq(clients.id, clientId))
      .returning();

    return NextResponse.json({ message: 'Client updated', client: updated[0] });
  } catch (error: unknown) {
    console.error('[UPDATE_CLIENT_ERROR]', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const clientId = Number(id);

  if (isNaN(clientId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    await db.delete(clients).where(eq(clients.id, clientId));
    return NextResponse.json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.error('[DELETE_CLIENT_ERROR]', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
