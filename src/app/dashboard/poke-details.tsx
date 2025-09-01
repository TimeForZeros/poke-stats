"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { create } from 'zustand';
import { useDetailsStore } from './details-store';

const PokeDetails = () => {
  const store = useDetailsStore();
  if (!store.details) return;
  return (
    <Dialog open={store.isOpen} onOpenChange={() => store.setIsOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{store.details.name}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PokeDetails;
