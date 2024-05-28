"use client";
import StepperForm from "@/components/StepperForm/SteperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";

function CreateStudentPage() {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "15px" }}>
      <UmBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "student", link: "/super_admin/manage-student" },
        ]}
      />

      <h1>Create Student Page</h1>
      <StepperForm
        steps={steps}
        submitHandler={(value) => handleStudentSubmit(value)}
      />
    </div>
  );
}

export default CreateStudentPage;
