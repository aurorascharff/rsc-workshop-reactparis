'use server';

import { prisma } from '@/db';

export async function createEmptyContact() {
  await prisma.contact.create({
    data: {},
  });
}
