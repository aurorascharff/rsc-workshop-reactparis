import React from 'react';
import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="mr-8 h-[192px] w-[192px] rounded-3xl bg-gray" />
      <Skeleton />
    </div>
  );
}
