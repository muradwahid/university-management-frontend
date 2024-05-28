"use client";

import { Flex, Spin } from "antd";

const Loading = () => {
  return (
    <div>
      <Flex
        style={{ height: "100dvh", width: "100%" }}
        justify="center"
        align="center"
      >
        <Spin size="large">
          <div className="content" />
        </Spin>
      </Flex>
    </div>
  );
};

export default Loading;
