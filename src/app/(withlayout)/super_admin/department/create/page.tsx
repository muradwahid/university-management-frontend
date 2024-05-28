"use client";
import FormInput from "@/components/Forms/FormInput";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function CreateDepartMent() {
  const [isLoading, setIsLoading] = useState(false);
  const [addDepartment] = useAddDepartmentMutation();
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    setIsLoading(true);
    try {
      await addDepartment(data);
      message.success("Department added successfully");
      setIsLoading(false);
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message);
      setIsLoading(false);
    }
  };
  return (
    <div style={{ margin: "10px" }}>
      <UmBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "department", link: "/super_admin/department" },
        ]}
      />
      <h1>Create DepartMent</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col
              xs={{ span: 24 }}
              md={{ span: 18 }}
              lg={{ span: 6 }}
              className="gutter-row"
            >
              <FormInput label="Title" name="title" />
            </Col>
          </Row>
          <Button
            style={{ marginTop: "10px" }}
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Add
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default CreateDepartMent;
