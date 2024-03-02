"use client";

import { useState, useRef, ElementRef } from "react";

import { List } from "@prisma/client";
import { useEventListener } from "usehooks-ts";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { updateList } from "@/actions/update-list";
import { toast } from "sonner";
import { ListOptions } from "./list-options";

interface ListHeaderProps {
  data: List;
  onAddCard: () => void;
}

export const ListHeader = ({ data, onAddCard}: ListHeaderProps) => {
  const { execute } = useAction(updateList, {
    onSuccess(data) {
      toast.success(`Renamed to "${data.title}"`);
      setTitle(data.title);
      disableEditing();
    },
    onError(error) {
      toast.error(error);
    },
  });
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      formRef.current?.requestSubmit();
    }
  };

  useEventListener("keydown", onKeyDown);

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    if (title === data.title) {
      return disableEditing();
    }

    execute({
      title,
      id: data.id,
      boardId: data.boardId,
    });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start- gap-x-2">
      {isEditing ? (
        <form
          action={onSubmit}
          ref={formRef}
          className="flex-1 px-[2px]"
        >
          <FormInput
            ref={inputRef}
            className="text-sm px-[7px] py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white"
            onBlur={onBlur}
            id="title"
            placeholder="Enter list title..."
            defaultValue={title}
          />
          <button type="submit" hidden />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent"
        >
          {data.title}
        </div>
      )}
      <ListOptions
        data={data}
        onAddCard={onAddCard}
      /> 
    </div>
  );
};
