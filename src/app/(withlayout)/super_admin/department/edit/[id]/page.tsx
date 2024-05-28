"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  //@ts-ignore
  const [updateDepartment] = useUpdateDepartmentMutation();
  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating...");
    try {
      await updateDepartment({ id, body: values });
      message.success("Department updated successfully");
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValue = {
    title: data?.title || "",
  };
  return (
    <div style={{ margin: "10px" }}>
      <UmBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "department", link: `/super_admin/department` },
        ]}
      />
      <ActionBar title="Update Department"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValue}>
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
