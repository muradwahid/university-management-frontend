import { bloodGroupOptions } from "@/constants/global";
import { Col, Row } from "antd";
import FormDatePicker from "../Forms/FormDatePicker";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import FormTextArea from "../Forms/FormTextArea";

function StudentBasicInfo() {
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
          lg={{ span: 8 }}
          className="gutter-row"
        >
          <FormInput
            type="email"
            name="student.email"
            size="large"
            label="Email Address"
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
            name="student.contactNo"
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
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact No"
          />
        </Col>
        <Col
          style={{ marginBottom: "10px" }}
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date Of Birth"
            size="large"
          />
        </Col>
        <Col
          style={{ marginBottom: "10px" }}
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <FormSelectField
            size="large"
            name="student.bloodgroup"
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
          lg={{ span: 12 }}
        >
          <FormTextArea
            size="large"
            name="student.presentAddress"
            label="Present Address"
          />
        </Col>
        <Col
          style={{ marginBottom: "10px" }}
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <FormTextArea
            size="large"
            name="student.permanentAddress"
            label="Permanent Address"
          />
        </Col>
      </Row>
    </div>
  );
}

export default StudentBasicInfo;
