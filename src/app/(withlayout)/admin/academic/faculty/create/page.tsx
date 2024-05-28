"use client";
import FormInput from "@/components/Forms/FormInput";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function CreateACFacultyPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    setIsLoading(true);
    try {
      const res = await addAcademicFaculty(data);
      console.log(res);
      //@ts-ignore
      if (!!res.data.id) {
        message.success("Academic Faculty Created Successfully");
      }
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
          { label: "admin", link: `/admin` },
          { label: "academic-faculty", link: "/admin/academic/faculty" },
        ]}
      />
      <h1>Create Academic Faculty</h1>
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

export default CreateACFacultyPage;
