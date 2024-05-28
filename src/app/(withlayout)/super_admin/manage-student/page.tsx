"use client";
import ActionBar from "@/components/ui/ActionBar";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

function ManageStudentPage() {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UmBreadCrumb items={[{ label: role, link: `/${role}` }]} />
      <ActionBar title="Student List">
        <h1>Manage Student Page</h1>
        <Link href="/super_admin/manage-student/create">
          <Button type="primary">Create Student</Button>
        </Link>
      </ActionBar>
    </div>
  );
}

export default ManageStudentPage;
