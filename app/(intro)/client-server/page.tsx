import React from 'react';

import { prisma } from '@/db';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function ClientServerPage() {
  // The function will have a hidden API endpoint created for it, and can be called from the client
  async function mutateData() {
    'use server';

    const data = await prisma.contact.findMany();
    return data[0].first as string;
  }

  // We can wrap our client components around server components without converting them to client components
  return (
    <div>
      ClientServerPage
      <ClientComponent mutateData={mutateData} content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
