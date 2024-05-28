"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { useUpdateAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";

const UMDUpdate = ({ params }: { params: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(params.id);
  const { id } = params;

  const [updateAcademicDepartment] = useUpdateAcademicDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    setIsLoading(true);
    try {
      const res = await updateAcademicDepartment({ id, body: data });
      //@ts-ignore
      if (!!res.data) {
        message.success("Academic Faculty Updated Successfully");
      } else {
        message.error("Failed to update Academic Faculty");
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
      <UmBreadCrumb
        items={[
          { label: "admin", link: "/admin" },
          { label: "academic-department", link: "/admin/academic/department" },
        ]}
      />
      <h1>Update Academic Department</h1>
      <Form submitHandler={onSubmit}>
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
        <Button style={{ marginTop: "10px" }} type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UMDUpdate;
