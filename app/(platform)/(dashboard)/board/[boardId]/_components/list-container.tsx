"use client";

import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

export const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return (
    <ol className="flex gap-x-3 h-full">
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
