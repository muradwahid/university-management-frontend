import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

function GuardianInfo() {
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
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Basic Information
      </p>
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
            name="student.guardian.fatherName"
            size="large"
            label="Father Name"
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
            name="student.guardian.fatherOccupation"
            size="large"
            label="Father Occupation"
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
            name="student.guardian.fatherContactNo"
            size="large"
            label="Father Contact No"
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
            name="student.guardian.motherName"
            size="large"
            label="Mother Name"
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
            name="student.guardian.motherOccupation"
            size="large"
            label="Mother occupation"
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
            name="student.guardian.motherContactNo"
            size="large"
            label="Mother contact no"
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
            name="student.address"
            size="large"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  );
}

export default GuardianInfo;
