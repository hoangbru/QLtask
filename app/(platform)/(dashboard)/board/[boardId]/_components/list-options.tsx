import { List } from "@prisma/client";

interface ListOptionsProps {
  onAddCard: () => void;
  data: List;
}
export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  return <div>ListOptions</div>;
};
