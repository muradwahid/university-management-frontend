"use client";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import { monthOptions } from "@/constants/global";
import { useAddAcademicSemesterMutation } from "@/redux/api/academic/semesterApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const SemesterCreate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [addAcademicSemester] = useAddAcademicSemesterMutation();
    const methods = useForm();
    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        setIsLoading(true);
        if (data?.title === "Autumn") data["code"] = "01";
        else if (data?.title === "Summer") data["code"] = "02";
        else if (data?.title === "Fall") data["code"] = "03";
        data.year = parseInt(data.year);

        try {
            const res = await addAcademicSemester(data);
            //@ts-ignore
            if (!!res.data) {
                message.success("Academic Semester Created Successfully");
            }
            setIsLoading(false);
        } catch (err: any) {
            // console.error(err.message);
            message.error(err.message);
            setIsLoading(false);
        }
    };

    const semesterOptions = [
        { label: "Autumn", value: "Autumn" },
        { label: "Summer", value: "Summer" },
        { label: "Fall", value: "Fall" },
    ];

    return (
        <div style={{ margin: "10px" }}>
            <UmBreadCrumb
                items={[
                    { label: "admin", link: `/admin` },
                    {
                        label: "academic-semester",
                        link: "/admin/academic/semester",
                    },
                ]}
            />
            <h1>Create Academic Semester</h1>
            <FormProvider {...methods}>
                <Form submitHandler={onSubmit}>
                    <Row>
                        <Col
                            xs={{ span: 24 }}
                            md={{ span: 18 }}
                            lg={{ span: 6 }}
                            className="gutter-row"
                        >
                            <FormSelectField
                                size="large"
                                name="title"
                                options={semesterOptions}
                                label="Title"
                                placeholder="Select"
                            />
                            <FormSelectField
                                size="large"
                                name="startMonth"
                                options={monthOptions}
                                label="Start Month"
                                placeholder="Select"
                            />
                            <FormSelectField
                                size="large"
                                name="endMonth"
                                options={monthOptions}
                                label="End Month"
                                placeholder="Select"
                            />
                            <FormYearPicker
                                name="year"
                                label="Year"
                                picker="year"
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
                </Form>
                {/* <form onSubmit={handleSubmit(onSubmit)}></form>  */}
            </FormProvider>
        </div>
    );
};

export default SemesterCreate;
