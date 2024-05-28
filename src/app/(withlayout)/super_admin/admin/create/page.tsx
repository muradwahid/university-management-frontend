"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  // departmentOptions,
  genderOptions,
} from "@/constants/global";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

function CreateAdminPage() {
  const { data, isLoading } = useDepartmentsQuery({ limit: 10, page: 1 });
  const [addAdminWidthFormData] = useAddAdminWithFormDataMutation();
  const departments: any = data?.departments;
  const departmentOptions = departments?.map((value: any) => {
    return {
      label: value.title,
      value: value.id,
    };
  });
  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    const studentData = { ...obj };
    delete studentData["file"];
    // const file = obj["file"];
    // delete obj["file"];
    console.log(studentData);
    const dataStudent = JSON.stringify(studentData);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", dataStudent);
    message.loading("Creating...");

    try {
      const result = await addAdminWidthFormData(formData);
      console.log("admin created ", result);
      message.success("Admin created successfully");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={{ margin: "20px" }}>
      <UmBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "admin", link: "/super_admin/admin" },
        ]}
      />
      <h1>Create Admin Page</h1>
      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          {/* admin information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              <Col
                style={{ marginBottom: "10px" }}
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
                className="gutter-row"
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormSelectField
                  size="large"
                  name="admin.gender"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormSelectField
                  size="large"
                  name="admin.managementDepartment"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <UploadImage name="file" />
              </Col>
            </Row>
          </div>
          {/* basic information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              <Col
                style={{ marginBottom: "10px" }}
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
                className="gutter-row"
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date Of Birth"
                  size="large"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormSelectField
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGroupOptions}
                  label="Blood Group"
                  placeholder="Select"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormInput
                  size="large"
                  name="admin.designation"
                  label="Designation"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormTextArea
                  size="large"
                  name="admin.presentAddress"
                  label="Present Address"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <FormTextArea
                  size="large"
                  name="admin.permanentAddress"
                  label="Permanent Address"
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateAdminPage;
