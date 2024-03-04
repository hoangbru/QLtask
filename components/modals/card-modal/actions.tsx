"use client";

import { useParams } from "next/navigation";
import { Copy, Trash } from "lucide-react";
import { toast } from "sonner";

import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { useAction } from "@/hooks/use-action";
import { useCardModal } from "@/hooks/use-card-modal";
import { CardWithList } from "@/types";

interface ActionsProps {
  data: CardWithList;
}

export const Actions = ({ data }: ActionsProps) => {
  const params = useParams();
  const cardModal = useCardModal();
  const boardId = params.boardId as string;

  const { execute: executeCopy, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess(data) {
        toast.success(`Card "${data.title}" copied`);
        cardModal.onClose();
      },
      onError(error) {
        toast.error(error);
      },
    }
  );

  const { execute: executeDelete, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess(data) {
        toast.success(`Card "${data.title}" deleted`);
        cardModal.onClose();
      },
      onError(error) {
        toast.error(error);
      },
    }
  );

  const onCopy = () => {
    executeCopy({
      id: data.id,
      boardId,
    });
  };

  const onDelete = () => {
    executeDelete({
      id: data.id,
      boardId,
    });
  };
  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        onClick={onCopy}
        disabled={isLoadingCopy}
        variant="gray"
        className="w-full justify-start"
        size="inline"
      >
        <Copy className="h-4 w-4 mr-2" />
        Copy
      </Button>
      <Button
        onClick={onDelete}
        disabled={isLoadingDelete}
        variant="gray"
        className="w-full justify-start text-red-500 bg-rose-100 hover:bg-rose-200"
        size="inline"
      >
        <Trash className="h-4 w-4 mr-2 text-red-500" />
        Delete
      </Button>
    </div>
  );
};

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};
