import UmBreadCrumb from "@/components/ui/UmBreadCrumb";

function CreateFacultyPage() {
  return (
    <div>
      <UmBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "faculty", link: "/super_admin/manage-faculty" },
        ]}
      />
      <h1>Create Faculty</h1>
    </div>
  );
}

export default CreateFacultyPage;
