"use client";

import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="not-foundPage">
      <Image src="/404.png" height={500} width={500} alt="" />
    </div>
  );
};

export default NotFoundPage;
