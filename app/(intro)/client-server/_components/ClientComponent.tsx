'use client';

import React from 'react';

type Props = {
  children?: React.ReactNode;
  content?: React.ReactNode;
};

export default function ClientComponent({ children, content }: Props) {
  // Without "use client", we cannot use onClick, useState, useEffect, window.location etc, custom hooks
  console.log('ClientComponent');

  return (
    <div className="border-2 border-blue-500 p-4">
      {children}
      <button
        onClick={() => {
          return alert('Hello from the client!');
        }}
      >
        Hello
      </button>
      {content}
    </div>
  );
}
