import { UserButton } from "@clerk/nextjs";

export default function ProtectedPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
