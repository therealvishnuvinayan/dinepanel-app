import { NextRequest, NextResponse } from 'next/server';
import { clients } from '@/db/schema';
import { z } from 'zod';
import { db } from '@/lib/db';

// Schema for validation
const clientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  category: z.string().min(1, 'Category is required'),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Invalid email').optional()
});

// GET - fetch all clients
export async function GET() {
  try {
    const allClients = await db.select().from(clients);
    return NextResponse.json({ clients: allClients }, { status: 200 });
  } catch (error) {
    console.error('[GET_CLIENTS_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to fetch clients' },
      { status: 500 }
    );
  }
}

// POST - create a client
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = clientSchema.parse(body);

    const inserted = await db.insert(clients).values(data).returning();

    return NextResponse.json(
      { message: 'Client added', client: inserted[0] },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('[ADD_CLIENT_ERROR]', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
