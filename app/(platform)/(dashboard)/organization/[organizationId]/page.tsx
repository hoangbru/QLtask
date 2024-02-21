import { OrganizationSwitcher } from "@clerk/nextjs";

export default function OrganizationIdPage() {
  return (
    <div>
      <OrganizationSwitcher hidePersonal/>
    </div>
  )
}