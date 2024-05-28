import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

function LocalGuardianInfo() {
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
            name="student.localGuardian.name"
            size="large"
            label="Local guardian name"
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
            name="student.localGuardian.occupation"
            size="large"
            label="Local guardian occupation"
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
            name="student.localGuardian.contactNo"
            size="large"
            label="Local guardian Contact No"
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
            name="student.localGuardian.address"
            size="large"
            label="Local guardian address"
          />
        </Col>
      </Row>
    </div>
  );
}

export default LocalGuardianInfo;
