"use client";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;

const Sidebar = (): React.ReactNode => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      breakpoint="md"
      style={{
        overflow: "auto",
        height: "100dvh",
        position: "sticky",
        left: "0",
        top: "0",
        bottom: "0",
      }}
    >
      <div>
        <h2
          style={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          UMS
        </h2>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
