"use client";
import {
  acDepartmentOptions,
  acSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/UploadImage";

function StudentInfo() {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 6 }}
          className="gutter-row"
        >
          <FormInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col
          style={{ marginBottom: "10px" }}
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 6 }}
        >
          <FormInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col
          style={{ marginBottom: "10px" }}
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 6 }}
        >
          <FormInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col
          style={{ marginBottom: "10px" }}
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 6 }}
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
            name="student.academicDepartment"
            options={acDepartmentOptions}
            label="Academic Department"
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
            name="student.academicFaculty"
            options={facultyOptions}
            label="Academic Faculty"
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
            name="student.academicSemester"
            options={acSemesterOptions}
            label="Academic Semester"
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
            name="student.gender"
            options={genderOptions}
            label="Academic Semester"
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
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
}

export default StudentInfo;
