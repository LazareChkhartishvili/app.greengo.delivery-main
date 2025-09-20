import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BUTTON_MESSAGES, ERROR_MESSAGES } from '@/config/constants';

import { api } from '@/services';
import { DialogClose } from '@radix-ui/react-dialog';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

function DeleteModal({ id }: { id: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  // @ts-expect-error need to fix this
  const token = session?.data?.user?.data?.token;

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const response = await api.services.roles.deleteRole(token, id);
      if (response) {
        setIsLoading(false);
        window.location.reload();
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(ERROR_MESSAGES.requestError);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>წაშლა</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>გსურთ საშლა?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="mr-2">
              {BUTTON_MESSAGES.cancel}
            </Button>
          </DialogClose>
          <DialogClose>
            <Button
              disabled={isLoading}
              onClick={handleDelete}
              variant="destructive"
            >
              {isLoading ? BUTTON_MESSAGES.loading : BUTTON_MESSAGES.delete}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModal;
