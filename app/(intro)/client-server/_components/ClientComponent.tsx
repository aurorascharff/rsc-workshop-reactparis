'use client';

import React from 'react';

export default function ClientComponent() {
  // Without "use client", we cannot use onClick, useState, useEffect, window.location etc, custom hooks
  console.log('ClientComponent');

  return (
    <div className="border-2 border-blue-500 p-4">
      <button
        onClick={() => {
          return alert('Hello from the client!');
        }}
      >
        Hello
      </button>
    </div>
  );
}
