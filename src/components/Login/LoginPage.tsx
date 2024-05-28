"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImg from "../../assets/Login-amico.png";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  // console.log(isLoggedIn());
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Row style={{ minHeight: "100dvh" }} justify="center" align="middle">
        <Col sm={12} md={16} lg={10}>
          <Image width={500} src={loginImg} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0px" }}>First login your account</h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div style={{ margin: "15px 0px" }}>
                <FormInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div style={{ margin: "15px 0px" }}>
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
