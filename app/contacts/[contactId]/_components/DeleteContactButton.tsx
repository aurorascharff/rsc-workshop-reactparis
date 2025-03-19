'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { deleteContact } from '@/data/actions/deleteContact';

type Props = {
  contactId: string;
};

export default function DeleteContactButton({ contactId }: Props) {
  return (
    <form
      action={() => {
        const response = confirm('Are you sure you want to delete this contact?');
        if (response) {
          deleteContact(contactId);
        }
      }}
    >
      <Button type="submit" theme="destroy">
        Delete
      </Button>
    </form>
  );
}
