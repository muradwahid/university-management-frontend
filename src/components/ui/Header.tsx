"use client";
import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { IGetUserInfo } from "@/types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  const user: IGetUserInfo | null = getUserInfo();
  return (
    <AntHeader style={{ background: "#fff" }}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <p>{user?.role}</p>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
