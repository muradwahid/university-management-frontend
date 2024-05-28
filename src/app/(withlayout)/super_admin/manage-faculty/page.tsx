import ActionBar from "@/components/ui/ActionBar";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

function ManageFacultyPage() {
  return (
    <div>
      <UmBreadCrumb
        items={[{ label: "super_admin", link: `/super_admin` }]}
      />
      <ActionBar title="Faculty List">
      <Link href="/super_admin/manage-faculty/create">
        <Button type="primary">Create</Button>
      </Link>
      </ActionBar>
    </div>
  );
}

export default ManageFacultyPage;
