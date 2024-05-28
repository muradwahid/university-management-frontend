"use client"

import { Flex } from "antd";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div>
      <Flex
        style={{ height: "100dvh", width: "100%" }}
        justify="center"
        align="center"
      >
        <h2>Something went wrong!</h2>
      </Flex>
    </div>
  );
};

export default ErrorPage;
