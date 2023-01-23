"use client";
import { useState } from "react";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [check, setCheck] = useState(true);
  console.log(check);
  return (
    <div>
      <h1>this is check page</h1>
    </div>
  );
};

export default page;
