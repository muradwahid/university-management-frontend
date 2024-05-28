"use client";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const CreateDepartment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data: facultiesData } = useAcademicFacultiesQuery({
    limit: 10,
    page: 1,
  });

  const facultiesOptions: any = facultiesData?.academicFaculties?.map(
    (data: any) => {
      return {
        label: data.title,
        value: data.id,
      };
    }
  );
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    setIsLoading(true);
    try {
      const res = await addAcademicDepartment(data);
      //@ts-ignore
      if (!!res.data) {
        message.success("Academic Department Created Successfully");
      }
      setIsLoading(false);
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <UmBreadCrumb
          items={[
            { label: "admin", link: `/admin` },
            {
              label: "academic-department",
              link: "/admin/academic/department",
            },
          ]}
        />
        <h1>Create Academic Department</h1>
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
            <Row>
              <Col
                xs={{ span: 24 }}
                md={{ span: 18 }}
                lg={{ span: 6 }}
                className="gutter-row"
              >
                <FormSelectField
                  size="large"
                  name="academicFacultyId"
                  options={facultiesOptions as SelectOptions[]}
                  label="Department"
                  placeholder="Select"
                />
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
    </div>
  );
};

export default CreateDepartment;